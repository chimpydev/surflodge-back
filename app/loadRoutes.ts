import { Express } from 'express';
import { embrService } from '../modules/embr/embr.service';

export function loadRoutes(app: Express) {
    app.use('/health', (req, res) => res.sendStatus(200));
    app.use('/circulating_supply', (req, res) => {
        embrService.getCirculatingSupply().then((result) => {
            res.send(result);
        });
    });
}
