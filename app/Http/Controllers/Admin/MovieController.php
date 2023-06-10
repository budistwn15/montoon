<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MovieRequest;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

class MovieController extends Controller
{

    public function __construct(){
        $this->middleware('handle.precognitive.requests')->only('store');
    }

    public function index()
    {
        return inertia('Admin/Movie/Index');
    }

    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    public function store(MovieRequest $request)
    {

    }
}
