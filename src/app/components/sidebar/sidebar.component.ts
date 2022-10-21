import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  newProject: Project;
  addProjectIsOpened: boolean;
  user: User;
  projectlist: Project[];

  constructor(private projectService: ProjectService, private userService: UserService) { }

  ngOnInit() {
     //get user details
     this.userService.getUser()
     .subscribe(user => this.user = user);

    //get projects
    this.projectService.getProjects()
      .subscribe(projects => this.projectlist = projects);

    //init new project
    this.newProject = new Project();   

    //subscribe to project progress cahnge
    this.projectService.progressUpdated$.subscribe(progress => {
      let project = this.projectlist.find(p => p.id === progress.key);
      if (project)
        project.progress = progress.value;
    });
  }

  addProject(): void {
    this.projectService.createProject(this.newProject)
      .subscribe(project => this.projectlist.unshift(project));

    this.newProject = new Project();
    this.addProjectIsOpened = false;
  }
}












