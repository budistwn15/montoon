<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;

class CheckUserSubscriptionMiddleware
{
    public function handle(Request $request, Closure $next, $status)
    {
        if($status == 'true' && !Auth::user()->isActive){
            return redirect(route('user.dashboard.subscription-plan.index'));
        }
        if($status == 'false' && Auth::user()->isActive){
            return redirect(route('user.dashboard.index'));
        }
        return $next($request);
    }
}
