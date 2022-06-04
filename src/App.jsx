import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Axios from "axios";
import SelectArt from "./components/SelectArt";
import FilterDatas from "./components/FilterDatas";
import AllRoutes from "./routes";
import PaginationArticle from "./components/PaginationArticle";

const App = () => {
    const [flight, setFlight] = useState([]);
    const [arrayFiltred, setArrayFiltred] = useState([]); //estado para o filtro
    const [search, setSearch] = useState("");
    const [selectArticles, setSelectArticles] = useState(10);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSelectArticles = (e) => {
        const select = e.target.value;
        setSelectArticles(select);
    };
    const handleValueDateFrom = (e) => {
        const dateFrom = e.target.value;
        setStartDate(dateFrom);
    };
    const handleValueDateTo = (e) => {
        const dateFrom = e.target.value;
        setEndDate(dateFrom);
    };
    // -----------------------------Requisição--------------------------------------------------
    useEffect(() => {
        let baseURL = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${selectArticles}&title_contains=${search}`;
        Axios.get(baseURL)
            .then((res) => {
                setFlight(res.data);
            })
            .catch((error) => console.log(error));
    }, [selectArticles, search]);

    // ---------------------------Paginação-----------------------------------------------------
    // Agora sempre que preciso usar a lista, eu verifico primeiro se ha UM ARRAY filtrado
    // Se houver, ele sempre terá preferencia para o uso

    const [itensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(
        (arrayFiltred.length ? arrayFiltred.length : flight.length) / itensPerPage
    );
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;

    // Aqui eu verifico se há algum valor no startDate e no endDate para então alterar o estado

    useEffect(() => {
        if (startDate && endDate) {
            setArrayFiltred(() =>
                flight.filter((card) => {
                    return (
                        card.publishedAt >= startDate && card.publishedAt <= endDate
                    );
                })
            );
        } else {
            setArrayFiltred([]);
        }
    }, [startDate, endDate, selectArticles, flight]);

    // Aqui seto para pagina 1 se houver mudança no numero dos artigos

    useEffect(() => {
        setCurrentPage(0);
    }, [selectArticles]);

    return (
        <div>
            <Header />
            <FilterDatas
                datefrom={startDate}
                dateTo={endDate}
                onChangeFrom={handleValueDateFrom}
                onChangeTo={handleValueDateTo}
            />
            <SearchInput onChange={handleChangeSearch} />
            <SelectArt onChange={handleSelectArticles} />

            {(arrayFiltred.length ? arrayFiltred : flight)
                .slice(startIndex, endIndex)
                .map((card) => {
                    return <Card card={card} key={card.id} />;
                })}

            <PaginationArticle
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <AllRoutes flight={flight} />

            <Footer />
        </div>
    );
};

export default App;
