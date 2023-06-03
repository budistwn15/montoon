<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::get();
        return inertia('User/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlans,
        ]);
    }

    public function subscribe(SubscriptionPlan $subscriptionPlan, Request $request)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'success'
        ];

        $userSubscription = UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
