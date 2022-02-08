import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  serverId!: number;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(parseInt(this.route.snapshot.params['id']));
    this.route.params.subscribe((param: Params)=> {
      this.server = this.serversService.getServer(parseInt(param['id']));
      this.serverId = parseInt(param['id']);
      console.log("this.serverId: ", this.serverId);
    });
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});


  }

}
