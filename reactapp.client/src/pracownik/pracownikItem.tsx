import { Pracownik } from '.types/pracownik/pracownik'

type PracownikProps = {
    pracownik: Pracownik
}

export const PracownikItem = (props: PracownikProps) => {
    const { pracownik } = props;
    return (
        <tr>
            <td>{pracownik.id}</td>
            <td>{pracownik.imie}</td>
            <td>{pracownik.nazwisko}</td>
            <td>{pracownik.stanowisko}</td>
            <td>{pracownik.wynagrodzenie}</td>
        </tr>
    )
}