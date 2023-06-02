import SecondaryButton from "@/Components/SecondaryButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function SubscriptionCard(
    {
        id,
        name,
        price,
        durationInMonth,
        features,
        isPremium,
        onSelectSubscription
    }
){

    const featureItems = features.map((feature, index) => (
            <div className="flex items-center gap-2" key={`${index}-${id}-${features}`}>
                <img src="/icons/ic_tick.svg" alt=""/>
                <span className="text-sm">
                    {feature}
                </span>
            </div>
        ));

    return (
        <>
            {!isPremium && (
            <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-black w-[300px] h-[max-content]">
                <div>
                    <div className="text-sm mb-2">{name}</div>
                    <div className="text-[28px] font-bold">
                        IDR {price.toLocaleString()}
                    </div>
                    <p className="text-gray-1 text-xs font-light">/{durationInMonth} months</p>
                </div>

                <div className="flex flex-col gap-4">
                    {featureItems}
                </div>
                <div onClick={onSelectSubscription}>
                    <SecondaryButton type={`button`}>
                        <span className="text-base">Start {name}</span>
                    </SecondaryButton>
                </div>
            </div>
            )}

            {isPremium && (
            <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-white w-[300px] bg-black">
                <div className="bg-alerange rounded-full p-[13px] max-w-max">
                    <img src="/icons/ic_star.svg" width="24" alt=""/>
                </div>
                <div>
                    <div className="text-sm mb-2">{name}</div>
                    <div className="text-[28px] font-bold">
                        IDR {price.toLocaleString()}
                    </div>
                    <p className="text-[#767676] text-xs font-light">/{durationInMonth} months</p>
                </div>
                <div className="flex flex-col gap-4">
                    {featureItems}
                </div>
                <div>
                    <PrimaryButton type={`button`}>
                        <span className="text-base font-semibold">Subscribe Now</span>
                    </PrimaryButton>
                </div>
            </div>
             )}
        </>
    )
}
