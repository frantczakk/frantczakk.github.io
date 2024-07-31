let wynikGracza = 0;
let wynikKomputera = 0;

document.getElementById('kamien-btn').addEventListener('click', function()
    {
        graj('kamień');
    });
document.getElementById('papier-btn').addEventListener('click', function()
    {
        graj('papier');
    });
document.getElementById('nozyce-btn').addEventListener('click', function()
    {
        graj('nożyce');
    });

function graj(wyborGracza)
    {
        const randomNumber = Math.random();
        let wyborKomputera = '';

        if (randomNumber >= 0 && randomNumber < 1/3) 
            {
                wyborKomputera = 'kamień';
            }
        else if (randomNumber >= 1/3 && randomNumber <2/3)
            {
                wyborKomputera = 'papier';
            }
        else 
            {
                wyborKomputera = 'nożyce';
            }
        
        let wynik = '';
        if (wyborGracza === wyborKomputera) 
            {
                wynik = 'Remis.';
            }
        else if 
        (
            (wyborGracza === 'kamień' && wyborKomputera === 'nożyce') || 
            (wyborGracza === 'papier' && wyborKomputera === 'kamień') ||
            (wyborGracza === 'nożyce' && wyborKomputera === 'papier')
        ) {
            wynik = 'Wygrałeś!';
            wynikGracza++;
        }  else {
            wynik = 'Przegrałeś:(';
            wynikKomputera++;
        }

        pokazPopup(`Wybrałeś ${wyborGracza}, a komputer ${wyborKomputera}. ${wynik}.`);

        document.getElementById('wynikGracza').textContent = wynikGracza;
        document.getElementById('wynikKomputera').textContent = wynikKomputera;
    }

    function pokazPopup(wiadomosc)
    {
        document.getElementById('popup-tekst').textContent = wiadomosc;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('ovr').style.display = 'block';
    }

    function zamknijPopup()
    {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('ovr').style.display = 'none';
    }