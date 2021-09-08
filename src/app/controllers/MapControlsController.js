import * as Yup from 'yup';
import alert from 'alert';
import axios from 'axios';

class MapControlsController {


    async listarPontos(req, res) {

        const schema = Yup.object().shape({
            minZoom: Yup.string()
                .min(0),
            maxZoom: Yup.string()
                .min(1),
            boundsString: Yup.string(),
            radius: Yup.string()
                .min(0)
                .required(),
            zoom: Yup.string()
                .required()
                .min(0),
        });

        if (!(await schema.isValid(req.query))) {
            return res.status(400).json({ error: 'Validacao Falhou' });
        }
        /**
         * A url download dos pontos do mapa estava dando timeout tanto no front como no swagger por isso nao utilizeo
         * const response = await axios.get("http://images.contelege.com.br/poi.json")
         */

        let minZoom;
        let maxZoom;
        let boundsString;
        const places = []//response.data
        /*valida se recebeu valor minZoom, se nao define default 0 */
        if (!req.query.minZoom) {
            minZoom = 0
        } else { minZoom = req.query.minZoom }
        /*valida se recebeu valor maxZoom, se nao define default 16 */
        if (!req.query.maxZoom) {
            maxZoom = 16
        } else { maxZoom = req.query.maxZoom }
        /*valida boundsString, se nao define default "-180,-90,180,90" */
        if (!req.query.boundsString ) {
            boundsString = "-180,-90,180,90"
        } else { boundsString = req.query.boundsString }
        const { zoom, radius } = req.query

        let bounds = boundsString.split(",")
        /*valida se recebeu 4 valores bounds, se nao define default bounds[-180,-90,180,90] */
        if(bounds.length != 4) {
            bounds = [-180,-90,180,90]
        }
        if (parseInt(zoom) < parseInt(minZoom)) {
            alert('Zoom tem que ser maior ou igual ao zoom minimo')
            return res.status(400).json({ error: 'Zoom menor que o valor zommMin' });
        }

        if (parseInt(zoom) > parseInt(maxZoom)) {
            alert('Zoom tem que ser menor ou igual ao zoom maximo')
            return res.status(400).json({ error: 'Zoom maior que o valor zommMax' });
        }

        return res.json({
            places,
            minZoom,
            maxZoom,
            radius,
            bounds,
            zoom
        });
    }


}

export default new MapControlsController();