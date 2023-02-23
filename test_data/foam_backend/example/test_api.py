from django.test import TestCase
from django.contrib.auth.models import User

from rest_framework.test import APIClient

TEST_USER = 'test'
TEST_PASSWORD = 'test123!'

class MyTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()
        User.objects.create_user(
            username=TEST_USER, email='', password=TEST_PASSWORD)
        response = self.client.post('/auth/token/login/', {'username': TEST_USER, 'password': TEST_PASSWORD})
        token = response.json()['auth_token']
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token)


    def test_person(self):
    
        id = self.client.post('/api/person/', {  'name': 'Test User',  'given_name': 'Test',  'family_name': 'User',  }).json()['id']
    
        response = self.client.get(f'/api/person/{id}/').json()
        
        assert response['name'] == 'Test User'
        
        assert response['given_name'] == 'Test'
        
        assert response['family_name'] == 'User'
        
    