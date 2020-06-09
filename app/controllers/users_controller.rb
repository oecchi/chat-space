class UsersController < ApplicationController
  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def index
    return nil if params[:keyword] == ""
    if params[:group_id]
      @group = Group.find(params[:group_id])
      user_ids = []
      @group.users.each do |user|
        user_ids << user.id
      end
    end
    @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).where.not(id: user_ids).limit(10)
    respond_to do |format|
      
      format.html
      format.json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
