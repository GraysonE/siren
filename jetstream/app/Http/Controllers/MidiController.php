<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class MidiController extends Controller
{

    public function index()
    {
        return URL::to('/public/storage/midi/Octave.mid');
    }
}
