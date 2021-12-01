import React, { FC } from "react";

const Topics: FC = () => {
    return (
        <>
            <div className="container mx-auto p-3">
                <div className="card bg-white">
                    <div className="card-body text-black">
                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                    Frontend
                                </p>
                            </div>
                        </div>

                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                   Backend
                                </p>
                            </div>
                        </div>

                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                   HR
                                </p>
                            </div>
                        </div>

                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                   Salary Negotiation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topics;