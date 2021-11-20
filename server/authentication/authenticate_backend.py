from django.contrib.auth.backends import ModelBackend
from .models import Users
import bcrypt
import base64
import hashlib
import secrets



class HashedPasswordAuthBackend(ModelBackend):

    def authenticate(self, username=None, password=None):
        try:
            
            user= Users.objects.get(username=username)
            if(self.verify_password(password,user.password)):
                return user
            else:
                return None
            
            
        except Users.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return Users.objects.get(pk=user_id)
        except Users.DoesNotExist:
            return None
    
    def hash_password(self,password, salt=None, iterations=260000):
        ALGORITHM = "pbkdf2_sha256"
        if salt is None:
            salt = secrets.token_hex(16)
        assert salt and isinstance(salt, str) and "$" not in salt
        assert isinstance(password, str)
        pw_hash = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt.encode("utf-8"), iterations
        )
        b64_hash = base64.b64encode(pw_hash).decode("ascii").strip()
        return "{}${}${}${}".format(ALGORITHM, iterations, salt, b64_hash)
    
    def verify_password(self,password, password_hash):
        ALGORITHM = "pbkdf2_sha256"
        if (password_hash or "").count("$") != 3:
            return False
        algorithm, iterations, salt, b64_hash = password_hash.split("$", 3)
        iterations = int(iterations)
        assert algorithm == ALGORITHM
        compare_hash = self.hash_password(password, salt, iterations)
        return secrets.compare_digest(password_hash, compare_hash)