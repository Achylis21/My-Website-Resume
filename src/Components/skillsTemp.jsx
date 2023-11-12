import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';

function allImage(r){
    let svg = {};
    r.keys().forEach((item, index) => { svg[item.replace('./', '')] = r(item); });
    return svg;
}
const svg = allImage(require.context('../Utils/svg', false, /\.(png|jpe?g|svg)$/));

function theChip (yr) {
    const yrCh = (yr === 1) ? 'year' : 'years';
    if(yr > 0){
        return(
        <Chip 
            startDecorator={
            <CircularProgress determinate value={0} 
            sx={{"--CircularProgress-size": "10px"}}/>
            }
            style={{
                minWidth: '100%',
                backgroundColor: 'green',
                color: 'white'
                }}
        >{yr} {yrCh}</Chip>
    );
    }
}
const skillsTemp = ({ value, year,logo,title }) => {
    const logoCh = ['java-logo.svg',
                    'c-sharp-logo.svg',
                    'javascript-logo.svg',
                    'html-5-logo.svg',
                    'css-3-logo.svg',
                    'microsoft-word.svg',
                    'microsoft-excel.svg',
                    'microsoft-ppt.svg'];
    const titleCh = ['Java',
                     'C#',
                     'JavaScript',
                     'HTML',
                     'CSS',
                     'Word',
                     'Excel',
                     'PowerPoint'];
    return(
        <div class="card shadow">
            <div class="card-body text-center">
                <div class="card-title mb-4">
                    <img src={ svg[logoCh[logo]]} alt='' width={50} height={50}/>
                    <h3 className='pt-3'>{titleCh[title]}</h3>
                </div>
                <CircularProgress determinate value={value} sx={{
                    "--CircularProgress-size": "100px", 
                    "--CircularProgress-trackThickness": "15px",
                    "--CircularProgress-progressThickness": "15px"
                }}>
                    {value}%
                </CircularProgress>
                <div className="row mt-4 mb-2 text-center">
                    <div className="col">
                        {theChip(year)}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default skillsTemp;
    