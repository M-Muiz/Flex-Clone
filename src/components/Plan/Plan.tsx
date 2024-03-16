import React from 'react'
import PlanCard from './PlanCard';

const Plan = () => {

    const [forCompany, setForCompany] = React.useState(false);

    return (
        <div className="max-w-6xl mx-auto">

            <div>
                <h1 className='text-4xl font-bold'>Orange Flex plans</h1>
                <p className="secondary_text py-5">
                    Turn on whatever you want, change if you want. Just transfer your number or choose a new one.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <h4 onClick={() => setForCompany(!forCompany)} className={`text-xl font-semibold cursor-pointer ${forCompany ? "" : "link"}`}>For You</h4>
                    <h4 onClick={() => setForCompany(!forCompany)} className={`text-xl font-semibol cursor-pointer ${forCompany ? "link" : ""}`}>For Company</h4>
                </div>
                <div className="flex items-cnter">

                        <PlanCard />
                        <PlanCard />
                        <PlanCard />
                </div>
            </div>

        </div>
    )
}

export default Plan
