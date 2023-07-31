function skillsMember(){
    return{
        restrict:'E',
        templateUrl:'modules/skills/views/members.html',
        controller:'SkillsMebmerController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member: '='
        }
    };
}