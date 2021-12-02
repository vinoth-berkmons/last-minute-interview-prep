import React, { FC } from "react";
import { Card } from "../../common/components/card/Card";

import './Dashboard.css'

const questions = {
    title: 'Questions',
    count: '123',
    style: {
        bg: 'bg-red'
    }
}

const topics = {
    title: 'Topics',
    count: '12',
    style: {
        bg: 'bg-orange'
    }
}


const interviews = {
    title: 'Interviews',
    count: '36',
    style: {
        bg: 'bg-light-blue'
    }
}


const assignments = {
    title: 'Assignments',
    count: '224',
    style: {
        bg: 'bg-blue-violet'
    }
}

const Dashboard: FC = () => {

    return (
        <>
            <div className="container mx-auto p-3">
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <Card cardProp={questions} />
                    </div>

                    <div className="flex-1">
                        <Card cardProp={topics} />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <Card cardProp={interviews} />
                    </div>
                    <div className="flex-1">
                        <Card cardProp={assignments} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-3">
                <div className="card bg-white">
                    <div className="card-header header-text text-2xl">
                        <p>Todays' Questions</p>
                    </div>
                    <div className="card-body">
                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                    Explain Concurrency?
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="badge badge-light-info">Golang</span>
                            </div>
                        </div>

                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                    What is Lazy loading?
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="badge badge-light-primary">Frontend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard