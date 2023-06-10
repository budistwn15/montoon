<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MovieRequest;
use App\Models\Movie;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Storage;

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
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = str($data['name'])->slug();
        Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie created successfully',
            'type' => 'success'
        ]);
    }
}
