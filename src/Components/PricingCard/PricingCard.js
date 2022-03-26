import React from "react";
import "./PricingCard.css";
function PricingCard({
  card_plan,
  plan_desc,
  price_count,
  price_list,
  price_active,
}) {
  console.log(price_list);
  return (
    <div id="PricingCard" className={price_active && " price_active"}>
      <div className="card_header">
        <span className="card_plan">{card_plan}</span>
        <div className="plan_pricing">
          <span className="price_count">{price_count}</span>
          <span>
            per user <br />
            per month
          </span>
        </div>
        <p className="plan_desc">{plan_desc}</p>
      </div>
      <div className="card_body">
        <div className="price_list_wrapper text-center">
          <ul className="price_list list-unstyled m-0 p-0 text-start">
            {price_list.map((v) => {
              return <li key={v.id}>{v.list}</li>;
            })}
          </ul>
          <a
            href="#"
            className={`${
              price_active ? "btn_bg_trial" : "btn_outline_trial"
            } btn_mt_28`}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
