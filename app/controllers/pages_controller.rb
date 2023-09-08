class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home legal]

  def home
  end

  def legal
  end
end
