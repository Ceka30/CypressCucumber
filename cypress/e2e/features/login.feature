Feature: Ingresar a Pagina Web

    Background: 
        Given Abrir el navegador con la URL "https://www.google.com/"

    Scenario Outline: Ingresar a pagina de Anime
        When Buscar "<texto>" en buscador
        When Seleccionar resultado de la busqueda "<texto>"
        Then Ingresar exitosamente a la pagina "<texto>"
        Examples:
            | texto |
            | AnimeFLV |
            | Crunchyroll |


