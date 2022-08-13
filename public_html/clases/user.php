<?php

class user{
    private int $id_user;
    private String $password;
   private String $email;
   private String $userName;
  
   private bool $administrador;
   private bool $i_economia;
   private bool $i_demografia;
   private bool $i_AyG;
   private bool $i_vivienda;
   private bool $i_turismo;


    public function __construct (int $id_user,String $email,String $userName,bool $administrador,bool $i_economia,bool $i_demografia,bool $i_AyG,bool $i_turismo,bool $i_vivienda){
        $this->id_user=$id_user;
        $this->email=$email;
        $this->userName=$userName;
        $this->administrador=$administrador;
        $this->i_economia=$i_economia;
        $this->i_demografia=$i_demografia;
        $this->i_AyG=$i_AyG;
        $this->i_turismo=$i_turismo;
        $this->i_vivienda=$i_vivienda;
        
        
    }
   

    public function getUserName(): String {
        return $this->userName;
    }
    public function setUserName(String $userName): void {
        $this->userName = $userName;
    }
    public function getEmail(): String {
        return $this->email;
    }
    public function setEmail(String $email): void {
        $this->email = $email;
    }
    public function getPassword(): String {
        return $this->password;
    }
    public function setPassword(String $password): void {
        $this->password = $password;
    }
    public function getIdUser(): int {
        return $this->id_user;
    }
    public function setIdUsser(int $id_user): void {
        $this->id_user = $id_user;
    }
    public function getAdministrador(): bool {
        return $this->administrador;
    }
    public function getI_economia(): bool {
        return $this->i_economia;
    }
    public function getI_demografia(): bool {
        return $this->i_demografia;
    }
    public function getI_AyG(): bool {
        return $this->i_AyG;
    }
    public function getI_turismo(): bool {
        return $this->i_turismo;
    }
    public function getI_vivienda(): bool {
        return $this->i_vivienda;
    }
 

 
    
}

?>