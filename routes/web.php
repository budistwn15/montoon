<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login');

Route::middleware(['auth','role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/',[DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{slug}',[MovieController::class, 'show'])->name('movie.show');
    Route::get('/subscription-plan',[SubscriptionPlanController::class, 'index'])->name('subscription-plan.index');
    Route::post('/subscription-plan/{subscriptionPlan}/subscribe',[SubscriptionPlanController::class, 'subscribe'])->name('subscription-plan.subscribe');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', fn() => Inertia::render('Prototype/Login'))
        ->name('login');

    Route::get('/register', fn() => Inertia::render('Prototype/Register'))
        ->name('register');

    Route::get('/dashboard', fn() => Inertia::render('Prototype/Dashboard'))
        ->name('dashboard');

    Route::get('/subscription-plan', fn() => Inertia::render('Prototype/SubscriptionPlan'))
        ->name('subscription-plan');

    Route::get('/movie/{slug}', fn() => Inertia::render('Prototype/Movie/Show'))
        ->name('movie.show');
});

require __DIR__.'/auth.php';
