# language: en
# ------------------------------------------------------------------------------
Feature: Login to transfer and add new account

  Scenario: Login with user ok
    Given we visit the "website"
    And we put the good credential of the user
    And we click on the button "Continuar"
    And we put the correct password of the user
    And we click on the button "Continuar" and validate the accounts

  Scenario: Transfer with own accounts
    Given we select the option "CUENTAS A LA VISTA"
    And we click the combo box "¿Qué deseas realizar?" and select the option "Transferencias/Pagos de TDC"
    And we select a list of account
    And we select the first option of account to transfer
    And we fill the fields to transfer
    And we click on the button "Continuar" to continue
    And we capture de the correct "PIN"
    And we click on the button "Continuar" to confirm transaction
    And we validate the page of transaction applied with success message

  Scenario: Add a new account of other bank
    Given we select the menu of transfer
    And we select the option of "ADMINISTRACIÓN DE CUENTAS DESTINO"
    And we click the option "OTROS BANCOS"
    And we click the option "Agregar cuenta" to add
    And we fill in the required fields
    And we click on the button to go the next page
    And we go to the confirm page and capture the "PIN"
    And we validate the application page
    And we finish the transaction with button "Finalizar"
    And we validate the account in the admin-other accounts
    And click on button "Salir"
    Then click on button "Cerrar" and confirm close sesion
