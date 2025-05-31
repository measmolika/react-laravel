<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="Authentication API",
 *     description="API for user registration, login, password change, and logout"
 * )
 **/
class AuthController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/register",
     *     summary="Register a new user",
     *     tags={"Auth"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name", "email", "password", "password_confirmation"},
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", example="john@example.com"),
     *             @OA\Property(property="password", type="string", example="password123"),
     *             @OA\Property(property="password_confirmation", type="string", example="password123")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="User registered successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="user", type="object"),
     *             @OA\Property(property="token", type="string", example="abcdef123456")
     *         )
     *     )
     * )
     */
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    /**
    * @OA\Post(
    *     path="/api/login",
    *     summary="Login user",
    *     tags={"Auth"},
    *     @OA\RequestBody(
    *         required=true,
    *         @OA\JsonContent(
    *             required={"email", "password"},
    *             @OA\Property(property="email", type="string", example="user@example.com"),
    *             @OA\Property(property="password", type="string", example="secret")
    *         )
    *     ),
    *     @OA\Response(
    *         response=200,
    *         description="Successful login",
    *         @OA\JsonContent(
    *             @OA\Property(property="token", type="string", example="some-token-value")
    *         )
    *     )
    * )
    **/
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/change-password",
     *     summary="Change current user's password",
     *     tags={"Auth"},
     *     security={{ "sanctum": {} }},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"current_password", "new_password", "new_password_confirmation"},
     *             @OA\Property(property="current_password", type="string", example="oldpass123"),
     *             @OA\Property(property="new_password", type="string", example="newpass456"),
     *             @OA\Property(property="new_password_confirmation", type="string", example="newpass456")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Password updated successfully"),
     *     @OA\Response(response=403, description="Current password is incorrect")
     * )
     */
    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:6|confirmed'
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 403);
        }

        $user->update([
            'password' => bcrypt($request->new_password)
        ]);

        return response()->json(['message' => 'Password updated successfully'], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
