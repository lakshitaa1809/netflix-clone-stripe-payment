import React, { useEffect, useState } from "react";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/Userslice";
import { loadStripe } from "@stripe/stripe-js";
import "./Subscriptionpage.css";
const Subscriptionpage = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);
  const checkplans = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`an error occured:${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51Mrn9GSBguGWX78GgNYIJevshRJYNDOXzFw2ocuTMXA3uIYnBgI7pQiv8UkrsOXsdeEcfzjPahYHl63d95U5tgB900JCmjcbGe"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(subscription);
  return (
    <div className="Subscription_page" key={user.uid}>
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="subscription_plans">
            <div className="subscription_info">
              <h3>{productData.name}</h3>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => checkplans(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Subscriptionpage;
