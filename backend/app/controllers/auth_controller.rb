class Api::V1::AuthController < ApplicationController

    # skip_before_action :check_authentication, only: [:create]

    def create
        
        user = User.find_by(username: params[:username])

        # byebug
        if user && user.authenticate(params[:password])
            # byebug
            render json: {username: user.username}
        else
            render json: {error: "Invalid username or password"}
        end
    end

end