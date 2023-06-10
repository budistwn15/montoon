<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|unique:movies,name',
            'category' => 'required',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image',
            'rating' => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
        ];
    }

    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }
}
