<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class MovieController extends Controller
{
    public function index()
    {
        return inertia('Admin/Movie/Index');
    }

    public function create()
    {
        return inertia('Admin/Movie/Create');
    }
}
