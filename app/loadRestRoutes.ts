import { Express } from 'express';
import { getCirculatingSupply } from '../modules/embr/embr';
import { balancerService } from '../modules/balancer/balancer.service';

export function loadRestRoutes(app: Express) {
    app.use('/health', (req, res) => res.sendStatus(200));
    app.use('/circulating_supply', (req, res) => {
        getCirculatingSupply().then((result) => {
            res.send(result);
        });
    });
}
