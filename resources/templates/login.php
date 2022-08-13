<?php ?>
<div id="login">
  <div id="card">
    <div id="card-content">
      <button type="button" id="btn-close-log" class="btn-close" data-bs-dismiss="alert"></button>
      <div id="card-title">
        <h2>LOGIN</h2>
        <div class="underline-title"></div>
      </div>
      <form method="post" action="../../public_html/controllers/controller.php"class="form">
        
        <label for="user-email" style="padding-top:13px">
          &nbsp;Email
        </label>
        <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
        <div class="form-border"></div>
        <label for="user-password" style="padding-top:22px">&nbsp;Password
          </label>
        <input id="user-password" class="form-content" type="password" name="password" required />
        <div class="form-border"></div>
        <a href="mailto:marcos.rodrigo.garcia@gmail.com">
          <legend id="forgot-pass">¿Olvidaste la contraseña?</legend>
        </a>
        <input type="hidden"  name="opt" value="log">
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        <a href="#" id="signup">¿No tienes cuenta? ¡Regístrate! </a>
      </form>
    </div>
  </div>
</div>