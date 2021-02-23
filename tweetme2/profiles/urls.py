from django.urls import path, include
from .views import profile_detail_view

urlpatterns = [
    path('<str:username>', profile_detail_view),

    #path('react/', TemplateView.as_view(template_name='react_via_dj.html')),
    #path('create-tweet', tweet_create_view),
    #path('tweets', tweet_list_view),
    #path('tweets/<int:tweet_id>', tweet_detail_view),
    #path('api/tweets/action', tweet_action_view),
    #path('api/tweets/<int:tweet_id>/delete', tweet_delete_view),

]


