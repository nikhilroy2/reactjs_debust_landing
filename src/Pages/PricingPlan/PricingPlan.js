import React from "react";
import "./PricingPlan.css";
import PricingCard from "../../Components/PricingCard/PricingCard";
function PricingPlan(props) {
  return (
    <div id="PricingPlan">
      <Section1></Section1>
    </div>
  );
}

export default PricingPlan;

const Section1 = () => {
  return (
    <section id="Section1">
      <div className="section_container">
        <div className="section_title text-center">
          <h2 className="title">
            Simple & flexible pricing <br /> built for everyone
          </h2>
          <strong className="subtitle">
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </strong>
        </div>

        <div className="section_body">
          <div className="d-flex justify-content-center flex-wrap">
            <PricingCard
              card_plan="Start"
              plan_desc="All the features you need to keep your personal files safe,
          accessible, and easy to share."
              price_count="19"
              price_list={[
                {
                  id: 1,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      2 GB of hosting space
                    </div>
                  ),
                },
                {
                  id: 2,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      14 days of free backups
                    </div>
                  ),
                },
                {
                  id: 3,
                  list: (
                    <div>
                      {" "}
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Social integrations
                    </div>
                  ),
                },
                {
                  id: 4,
                  list: (
                    <div>
                      {" "}
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Advanced client billing
                    </div>
                  ),
                },
              ]}
            ></PricingCard>

            <PricingCard
              card_plan="Enterprise"
              plan_desc="All the features you need to keep your personal files safe, accessible, and easy to share."
              price_count="49"
              price_active={true}
              price_list={[
                {
                  id: 1,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      2 GB of hosting space
                    </div>
                  ),
                },
                {
                  id: 2,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      14 days of free backups
                    </div>
                  ),
                },
                {
                  id: 3,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Social integrations
                    </div>
                  ),
                },
                {
                  id: 4,
                  list: (
                    <div>
                      {" "}
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Advanced client billing
                    </div>
                  ),
                },
              ]}
            ></PricingCard>

            <PricingCard
              card_plan="Enterprise"
              plan_desc="All the features you need to keep your personal files safe, accessible, and easy to share."
              price_count="99"
              price_list={[
                {
                  id: 1,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      2 GB of hosting space
                    </div>
                  ),
                },
                {
                  id: 2,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      14 days of free backups
                    </div>
                  ),
                },
                {
                  id: 3,
                  list: (
                    <div className="active_list">
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Social integrations
                    </div>
                  ),
                },
                {
                  id: 4,
                  list: (
                    <div className="active_list">
                      {" "}
                      <svg
                        width={14}
                        height={9}
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5L4.97059 8L13 1"
                          stroke="#FF0D6A"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Advanced client billing
                    </div>
                  ),
                },
              ]}
            ></PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};
