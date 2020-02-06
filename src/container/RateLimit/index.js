import React from "react";
import styled from "styled-components";

import { DataConsumer } from "../../DataContext";

const LimitStyle = styled.main`
  .limit {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
  }

  .num {
    color: #998bab;
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  p {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacint: 1px;
    margin: 0;
    color: #998bab;
  }
`;

function RateLimit() {
  return (
    <DataConsumer>
      {({ rateLimit }) => (
        <LimitStyle>
          {Object.entries(rateLimit).length > 0 ? (
            <div className="limit">
              <div className="num">
                {`${rateLimit.remaining} / ${rateLimit.limit}`}
              </div>
              <p>Requests Left</p>
            </div>
          ) : null}
        </LimitStyle>
      )}
    </DataConsumer>
  );
}

export default RateLimit;
