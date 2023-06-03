<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::get();
        return inertia('User/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlans,
        ]);
    }
}
