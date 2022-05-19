<?php

namespace App\Http\Controllers\API;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RestaurantController extends Controller
{
    public function index(){
        $restaurants = Restaurant::all();
        return response()->json(
            [
                'status' => 200,
                'restaurants' =>  $restaurants,
            ]
            );
    }
    public function store(Request $request)
    {
        $restaurant = new Restaurant();
        $restaurant->name = $request ->input('name');
        $restaurant->phone = $request ->input('phone');
        $restaurant->email = $request ->input('email');
        $restaurant->detail = $request ->input('detail');
        $restaurant->save();
        return response()->json(
            [
                'status' => 200,
                'message' => 'OK',
            ]
        );
    }
}
