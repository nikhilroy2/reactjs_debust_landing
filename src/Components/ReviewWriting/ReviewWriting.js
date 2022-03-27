import React, {useState} from "react";
import "./ReviewWriting.css";
function ReviewWriting(props) {
  // use rateActive variable in backend ajax request for form.
  const [rateActive, setRateActive] = useState(0);


  const [rateCount, setRateCount] = useState(rateActive)
  const ratingOverHandle = (val, rate)=> {
    // console.log(rate)
    setRateCount(rate)
    // console.log('rateCount', rateCount)
  }
  const ratingOutHandle = (val)=> {
    // if(rateActive >= 1 == false){
    // }
    setRateCount(rateActive)
  }
  const ratingClickHandle = (va, rate)=> {
    setRateActive(rate)


    // console.log(rate)
  }
  return (
    <div id="ReviewWriting">
      <form action="#" id="review_writing_form">
        <div className="form_group">
          <div className="input_wrapper flex-grow-1 position-relative">
            <input
              type="text"
              placeholder="Write a review"
              className="review_input"
            />
            <button className="btn_msg_send">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="star_action_wrapper">
            <button onClick={event=> ratingClickHandle(event, 1)} onMouseOut={(event)=> ratingOutHandle(event)} onMouseOver={(event)=> ratingOverHandle(event, 1)} className="star_btn">
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_3224)">
                  <rect
                    width={45}
                    height={45}
                    rx={5}
                    transform="matrix(1 0 0 -1 0 45)"
                    fill="#504191"
                    fillOpacity="0.65"
                  />
                </g>
                <path
                  d="M22 28.27L28.18 32L26.54 24.97L32 20.24L24.81 19.63L22 13L19.19 19.63L12 20.24L17.46 24.97L15.82 32L22 28.27Z"
                  fill={rateCount>=1? 'var(--text-17)': 'var(--text-bc)'}
                />
                <defs>
                  <filter
                    id="filter0_b_158_3224"
                    x={-25}
                    y={-25}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="12.5" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_3224"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_3224"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button onClick={event=> ratingClickHandle(event, 2)} onMouseOut={(event)=> ratingOutHandle(event)} onMouseOver={(event)=> ratingOverHandle(event, 2)} className="star_btn">
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_3224)">
                  <rect
                    width={45}
                    height={45}
                    rx={5}
                    transform="matrix(1 0 0 -1 0 45)"
                    fill="#504191"
                    fillOpacity="0.65"
                  />
                </g>
                <path
                  d="M22 28.27L28.18 32L26.54 24.97L32 20.24L24.81 19.63L22 13L19.19 19.63L12 20.24L17.46 24.97L15.82 32L22 28.27Z"
                  fill={rateCount>=2? 'var(--text-17)': 'var(--text-bc)'}
                />
                <defs>
                  <filter
                    id="filter0_b_158_3224"
                    x={-25}
                    y={-25}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="12.5" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_3224"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_3224"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button onClick={event=> ratingClickHandle(event, 3)} onMouseOut={(event)=> ratingOutHandle(event)} onMouseOver={(event)=> ratingOverHandle(event, 3)} className="star_btn">
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_3224)">
                  <rect
                    width={45}
                    height={45}
                    rx={5}
                    transform="matrix(1 0 0 -1 0 45)"
                    fill="#504191"
                    fillOpacity="0.65"
                  />
                </g>
                <path
                  d="M22 28.27L28.18 32L26.54 24.97L32 20.24L24.81 19.63L22 13L19.19 19.63L12 20.24L17.46 24.97L15.82 32L22 28.27Z"
                  fill={rateCount>=3? 'var(--text-17)': 'var(--text-bc)'}
                />
                <defs>
                  <filter
                    id="filter0_b_158_3224"
                    x={-25}
                    y={-25}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="12.5" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_3224"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_3224"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button onClick={event=> ratingClickHandle(event, 4)} onMouseOut={(event)=> ratingOutHandle(event)} onMouseOver={(event)=> ratingOverHandle(event, 4)} className="star_btn">
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_3224)">
                  <rect
                    width={45}
                    height={45}
                    rx={5}
                    transform="matrix(1 0 0 -1 0 45)"
                    fill="#504191"
                    fillOpacity="0.65"
                  />
                </g>
                <path
                  d="M22 28.27L28.18 32L26.54 24.97L32 20.24L24.81 19.63L22 13L19.19 19.63L12 20.24L17.46 24.97L15.82 32L22 28.27Z"
                  fill={rateCount>=4? 'var(--text-17)': 'var(--text-bc)'}
                />
                <defs>
                  <filter
                    id="filter0_b_158_3224"
                    x={-25}
                    y={-25}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="12.5" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_3224"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_3224"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>

            <button onClick={event=> ratingClickHandle(event, 5)} onMouseOut={(event)=> ratingOutHandle(event)} onMouseOver={(event)=> ratingOverHandle(event, 5)} className="star_btn">
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_3225)">
                  <rect
                    width={45}
                    height={45}
                    rx={5}
                    transform="matrix(1 0 0 -1 0 45)"
                    fill="#504191"
                    fillOpacity="0.65"
                  />
                </g>
                <path
                  d="M32 20.24L24.81 19.62L22 13L19.19 19.63L12 20.24L17.46 24.97L15.82 32L22 28.27L28.18 32L26.55 24.97L32 20.24ZM22 26.4V17.1L23.71 21.14L28.09 21.52L24.77 24.4L25.77 28.68L22 26.4Z"
                  fill={rateCount>=5? 'var(--text-17)': 'var(--text-bc)'}
                />
                <defs>
                  <filter
                    id="filter0_b_158_3225"
                    x={-25}
                    y={-25}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="12.5" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_3225"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_3225"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewWriting;
