<?php ?>
<div id="registro">
  <div id="card">
    <div id="card-content">
    <button type="button" id="btn-close-reg" class="btn-close" data-bs-dismiss="alert"></button>
      <div id="card-title">
        <h2>REGISTRO</h2>
        <div class="underline-title"></div>
      </div>
      <form method="post" action="../../public_html/controllers/controller.php" class="form" id="form-registro">

        <label for="user-email" style="padding-top:13px">
          &nbsp;Nombre de Usuario
        </label>
        <input id="user-name" class="form-content" type="text" name="userName" autocomplete="on" required maxlength="15" />
        <div class="form-border"></div>

        <label for="user-email" style="padding-top:13px">
          &nbsp;Email
        </label>
        <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
        <div class="form-border"></div>
        <label for="user-password" style="padding-top:22px">&nbsp;Password
        </label>
        <input id="user-password" class="form-content" type="password" name="password" required />
        <div class="form-border"></div>
        <label for="user-password2" style="padding-top:22px">&nbsp;Reescribe tu password
        </label>
        <input id="user-password2" class="form-content" type="password" name="password2" required />
        <div class="form-border"></div>
        
        <div class="valid-feedback">Success! You've done it.</div>
        <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
        <!-- INTERESES -->
        <label for="Intereses" style="padding-top:22px">&nbsp;Intereses
        </label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="economia" value="economia" id="Economía">
          <label class="form-check-label" for="Economía">
            Economía
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="demografia" value="demografia" id="demografia">
          <label class="form-check-label" for="demografia">
            Demografía
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="AyG" value="AyG" id="AyG">
          <label class="form-check-label" for="AyG">
            Agricultura y ganadería
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="turismo" value="turismo" id="turismo">
          <label class="form-check-label" for="turismo">
            Turismo
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="vivienda" value="vivienda" id="vivienda">
          <label class="form-check-label" for="vivienda">
            Vivienda
          </label>
        </div>
        <div class="form-border"></div>

        <input type="hidden" name="opt" value="reg">
        <input id="submit-btn" type="submit" name="submit" value="Registrase" />

      </form>
    </div>
  </div>