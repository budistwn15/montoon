<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
    use SoftDeletes;

    protected $fillable = ['title', 'description', 'thumbnail', 'video', 'featured', 'status', 'publish_date', 'user_id'];
}
