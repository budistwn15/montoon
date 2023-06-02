<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature1', 'feature2', 'feature3'])
            ],
            [
                'name' => 'Premium',
                'price' => 500000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature1','feature2', 'feature3','feature4', 'feature5'])
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
