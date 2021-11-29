import React, { FC } from "react";

import './Dashboard.css'


const Dashboard: FC = () => {
    return (
        <>
            <div className="container mx-auto p-3">
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <div className="card bg-red">
                            <div className="card-body">
                                <h5 className="text-lg mb-4 mt-0">Questions</h5>
                                <p className=" text-2xl">250</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="card bg-orange">
                            <div className="card-body">
                                <h5 className="text-lg mb-4 mt-0">Topics</h5>
                                <p className=" text-2xl">130</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <div className="card bg-light-blue">
                            <div className="card-body">
                                <h5 className="text-lg mb-4 mt-0">Interviews</h5>
                                <p className=" text-2xl">36</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="card bg-blue-violet">
                            <div className="card-body">
                                <h5 className="text-lg mb-4 mt-0">Assignments</h5>
                                <p className=" text-2xl">72</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard