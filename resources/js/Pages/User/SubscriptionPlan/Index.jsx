import Authenticated from "@/Layouts/Authenticated/Authenticated.jsx";
import {Head} from "@inertiajs/react";
import SubscriptionCard from "@/Components/SubscriptionCard.jsx";
import { router } from '@inertiajs/react'

export default function Index({auth, subscriptionPlans}){

    const selectSubscription = id => {
        router.post(
            route('user.dashboard.subscription-plan.subscribe',{
                subscriptionPlan: id
            })
        );
    }

    return (
        <>
            <Head title={`Payment`}/>
            <Authenticated
                user={auth.user}
            >
                <div className="ml-[300px] px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new experiences from movies.
                        </p>
                        <div className="flex justify-center gap-10 mt-[70px]">
                            {subscriptionPlans.map((plan) => (
                                    <SubscriptionCard
                                        key={plan.id}
                                        name={plan.name}
                                        price={plan.price}
                                        durationInMonth={plan.active_period_in_months}
                                        features={JSON.parse(plan.features)}
                                        isPremium={plan.name === 'Premium'}
                                        onSelectSubscription={() => selectSubscription(plan.id)}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
