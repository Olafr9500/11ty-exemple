window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({
        element: "#search",
        translations: {
            placeholder: "Recherche",
            clear_search: "x",
            load_more: "Voir plus de résultats",
            search_label: "Rechercher sur le site",
            filters_label: "Filtres",
            zero_results: "Aucun résultat pour [SEARCH_TERM]",
            many_results: "[COUNT] résultats pour [SEARCH_TERM]",
            one_result: "[COUNT] résultat pour [SEARCH_TERM]",
            alt_search: "Aucun résultats pour [SEARCH_TERM]. Affichez plutôt les résultats pour [DIFFERENT_TERM]",
            search_suggestion: "Aucun résultats pour [SEARCH_TERM]. Essayez l'une des recherches suivantes:",
            searching: "Recherche pour [SEARCH_TERM]..."
        }
    });
});