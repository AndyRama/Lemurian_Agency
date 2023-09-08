class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home legal contact]

  def home
  end

  def contact
  end

  def legal
  end
end
