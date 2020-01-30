import React from 'react';
import styled from 'styled-components';

const LimitStyle = styled.main`
    .limit{
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
    }

    .num{
        color: #998BAB;
        font-size: 20px;
        margin-bottom: 0.5rem;
    }

    p{
        text-transform: uppercase;
        font-size: 10px;
        letter-spacint: 1px;
        margin: 0;
        color: #998BAB;
    }
`

function index({rateLimit}) {
    let rateLimitLength = Object.entries(rateLimit).length
    return (
        <LimitStyle>
            {(rateLimitLength > 0) ? (
                <div className="limit">
                    <div className="num">
                        {`${rateLimit.remaining} / ${rateLimit.limit}`}
                    </div>
                    <p>Requests Left</p>
                </div>
            ) : null}
        </LimitStyle>
    );
}

export default index;