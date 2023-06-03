<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;

class MovieController extends Controller
{
    public function show($slug)
    {
        $movie = Movie::where('slug',$slug)->firstOrFail();
        return inertia('User/Movie/Show', [
            'movie' => $movie,
        ]);
    }
}
