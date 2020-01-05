(this.webpackJsonpsolanum=this.webpackJsonpsolanum||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),o=a.n(i),s=(a(64),a(55)),l=a(6),c=a(7),m=a(9),h=a(8),d=a(10),u=(a(13),a(17)),p=a.n(u),j=a(20),g=a(16),b=a(58),f=(a(50),function(e){function t(e){var a;Object(l.a)(this,t);var n=(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).props.datestamp+" - "+a.props.timestamp;if(null==localStorage.getItem(n))a.state={isWorked:!1,taskComment:" ",project:" "};else{var r=JSON.parse(localStorage.getItem(n));a.state={isWorked:!0,taskComment:r.comment,project:r.project}}return a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({isWorked:!this.state.isWorked})}},{key:"handleCommentChange",value:function(e){var t=this;this.setState({taskComment:e.target.value},(function(){var e=t.props.datestamp+" - "+t.props.timestamp,a={comment:t.state.taskComment,project:t.state.project};localStorage.setItem(e,JSON.stringify(a))}))}},{key:"handleDeleteClick",value:function(e){var t=this.props.datestamp+" - "+this.props.timestamp;localStorage.getItem(t)&&localStorage.removeItem(t),this.setState({isWorked:!1,taskComment:" "})}},{key:"handleProjectChange",value:function(e){this.setState({project:e.target.value.split("-")[1]})}},{key:"handleSaveClick",value:function(e){var t=this.props.datestamp+" - "+this.props.timestamp,a={comment:this.state.taskComment,project:this.state.project};localStorage.setItem(t,JSON.stringify(a))}},{key:"render",value:function(){var e=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):{},t=this.props.datestamp+" - "+this.props.timestamp,a=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)).project:" ";return r.a.createElement(g.a,{trigger:r.a.createElement("a",{href:"#",style:{textAlign:"center"}},a),position:"top left",closeOnDocumentClick:!0},r.a.createElement("h2",null,this.props.datestamp," - ",this.props.timestamp),r.a.createElement("h3",null,"Select Project:"),r.a.createElement("select",{onChange:this.handleProjectChange.bind(this)},Object.entries(e).map((function(e){return r.a.createElement("option",null,e[0]," - ",e[1])}))),r.a.createElement("h3",null,"Enter comment:"),r.a.createElement("input",{type:"text",name:"comment",value:this.state.taskComment,onChange:this.handleCommentChange.bind(this)}),r.a.createElement("button",{type:"submit",onClick:this.handleDeleteClick.bind(this)},"Delete"))}}]),t}(r.a.Component)),E=Object(j.extendMoment)(p.a),v=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{class:"ui celled definition compact large table"},r.a.createElement("thead",null,r.a.createElement("th",null,"Date"),this.props.timeRange.map((function(e){var t=E(e).format("HH:mm");return r.a.createElement("th",null,t)}))),r.a.createElement("tbody",null,this.props.dateRange.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{id:"row"},t.format("MM/DD")),e.props.timeRange.map((function(a){var n=E(a).format("HH:mm");return r.a.createElement("td",{class:"selectable"},r.a.createElement(f,{datestamp:t.format("MM/DD"),timestamp:n,dateRange:e.props.dateRange}))})))}))))}}]),t}(r.a.Component),O=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleNameChange",value:function(e){this.props.handleProjectNameChange(e.target.value)}},{key:"handleEmojiChange",value:function(e){this.props.handleProjectEmojiChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"ui input"},r.a.createElement("input",{class:"ui input",type:"text",name:"projectName",onChange:this.handleNameChange.bind(this)})),r.a.createElement("select",{onChange:this.handleEmojiChange.bind(this)},this.props.emoji.map((function(e){return r.a.createElement("option",null,e.native)}))),r.a.createElement("p",null," "),r.a.createElement("button",{class:"ui button",onClick:this.props.handleAddProject},"Add Project"))}}]),t}(r.a.Component),y=a(25),S=a.n(y),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={startDate:a.props.startDate,endDate:a.props.endDate,startTime:a.props.startTime,endTime:a.props.endTime},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleStartDate",value:function(e){this.props.handleStartDate(e)}},{key:"handleEndDate",value:function(e){this.props.handleEndDate(e)}},{key:"handleStartTime",value:function(e){this.props.handleStartTime(e)}},{key:"handleEndTime",value:function(e){this.props.handleEndTime(e)}},{key:"render",value:function(){return r.a.createElement(g.a,{modal:!0,trigger:r.a.createElement("a",{class:"ui button"},"Adjust Display Period")},r.a.createElement("h4",null,"Pick Start Date: ",r.a.createElement(S.a,{selected:this.props.startDate,onChange:this.handleStartDate.bind(this)})),r.a.createElement("h4",null,"Pick End Date:   ",r.a.createElement(S.a,{selected:this.props.endDate,onChange:this.handleEndDate.bind(this)})),r.a.createElement("h4",null,"Pick Start Time: ",r.a.createElement(S.a,{selected:this.props.startTime,onChange:this.handleStartTime.bind(this),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,timeCaption:"Time",dateFormat:"hh:mm"})),r.a.createElement("h4",null,"Pick End Time:   ",r.a.createElement(S.a,{selected:this.props.endTime,onChange:this.handleEndTime.bind(this),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,timeCaption:"Time",dateFormat:"hh:mm"})))}}]),t}(r.a.Component),D=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{trigger:r.a.createElement("a",{className:"ui button"},"Manage Projects"),position:"bottom left",modal:!0},r.a.createElement("h2",null,"Manage Projects"),Object.entries(this.props.projects).map((function(t,a){return r.a.createElement("div",null,r.a.createElement("h3",null,t[1],"  ",t[0],"  ",r.a.createElement("button",{type:"submit",value:t[0],onClick:e.props.handleDeleteProject},"Delete")))})))}}]),t}(r.a.Component),T=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleDownloadTimeSheet",value:function(){var e=localStorage,t="data:text/csv;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download","timesheet.csv"),document.body.appendChild(a),a.click(),a.remove()}},{key:"handleUploadTimeSheet",value:function(){}},{key:"render",value:function(){var e=Object.entries(localStorage).filter((function(e){return"projects"!=e[0]}));return r.a.createElement(g.a,{trigger:r.a.createElement("a",{className:"ui button"},"View Timesheet")},r.a.createElement("h4",null,r.a.createElement("a",{type:"submit",href:"#",onClick:this.handleDownloadTimeSheet.bind(this)},"Download TimeSheet")),r.a.createElement("h1",null,"Timesheet"),e.map((function(e){var t=e[0],a=JSON.parse(e[1]);return r.a.createElement("div",null,r.a.createElement("h4",null,t," - ",a.comment," ",a.project))})),") })}")}}]),t}(r.a.Component),C=Object(j.extendMoment)(p.a),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={currentTime:C().format("HH:mm"),pomodoroTime:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"tick",value:function(){var e=this;this.interval=setInterval((function(){e.setState((function(e){return{pomodoroTime:e.pomodoroTime+1}}))}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.interval)}},{key:"clearTimer",value:function(){this.stopTimer(),this.setState({pomodoroTime:0})}},{key:"render",value:function(){return r.a.createElement("a",{class:"ui button"},"Timer - ",C({minute:this.state.pomodoroTime/60,second:this.state.pomodoroTime%60}).format("m:ss"))}}]),t}(r.a.Component),w=(a(124),function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleFileUpload",value:function(e){console.log(e.target.value);var t=new FileReader;t.onload=function(e){var a=JSON.parse(t.result);console.log(a),Object.entries(a).map((function(e){console.log(e),localStorage.setItem(e[0],e[1])}))},t.readAsText(e.target.files[0])}},{key:"render",value:function(){return r.a.createElement("input",{type:"file",onChange:this.handleFileUpload.bind(this)})}}]),t}(r.a.Component)),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"ui huge message page grid"},r.a.createElement("h1",{class:"ui huge header"},"Pomodoro Time Tracker"),r.a.createElement("p",null,"A simple WebApp allowing tracking of time against projects using the Pomodoro method."),r.a.createElement("p",null,"Time is stored locally in the browser with no account needed."),r.a.createElement("p",null,"To get started, enter a project and choose an Emoji to use in the grid:"),r.a.createElement(O,{projects:this.props.projects,emoji:this.props.emoji,handleAddProject:this.props.handleAddProject,handleProjectNameChange:this.props.handleProjectNameChange,handleProjectEmojiChange:this.props.handleProjectEmojiChange}),r.a.createElement("p",null,'Add projects using the "Manage Projects" Button and log time by click a cell below'),r.a.createElement("p",null,"Or load an existing timesheet file: ",r.a.createElement(w,{handleFileUpload:this.props.handleFileUpload.bind(this)})),r.a.createElement("div",{class:"ui buttons"},r.a.createElement(k,{startDate:this.props.startDate,endDate:this.props.endDate,startTime:this.props.startTime,endTime:this.props.endTime,dateRange:this.props.dateRange,timeRange:this.props.timeRange,handleStartDate:this.props.handleStartDate,handleEndDate:this.props.handleEndDate,handleStartTime:this.props.handleStartTime,handleEndTime:this.props.handleEndTime})),r.a.createElement("div",{class:"ui buttons"},r.a.createElement(D,{projects:this.props.projects,handleDeleteProject:this.props.handleDeleteProject})),r.a.createElement("div",{class:"ui buttons"},r.a.createElement(T,null)),r.a.createElement("div",{class:"ui buttons"},r.a.createElement(P,null))))}}]),t}(r.a.Component);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=Object(j.extendMoment)(p.a),J=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(m.a)(this,Object(h.a)(t).call(this,e));var n=new Date(2019,11,1),r=new Date(2019,11,31),i=A.range(n,r),o=Array.from(i.by("days")),s=new Date(2019,9,1,0,0),c=new Date(2019,9,1,23,59),d=A.range(s,c),u=Array.from(d.by("minutes",{step:30})),p=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):{};return a.state={startDate:n,endDate:r,startTime:s,endTime:c,dateRange:o,timeRange:u,projects:p,emoji:b.a.search("fruit"),projectName:"",projectEmoji:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleStartDate",value:function(e){var t=A.range(e,this.state.endDate),a=Array.from(t.by("days"));this.setState({startDate:e,dateRange:a})}},{key:"handleEndDate",value:function(e){var t=A.range(this.state.startDate,e),a=Array.from(t.by("days"));this.setState({endDate:e,dateRange:a})}},{key:"handleStartTime",value:function(e){var t=A.range(e,this.state.endTime),a=Array.from(t.by("minutes",{step:30}));this.setState({startTime:e,timeRange:a})}},{key:"handleEndTime",value:function(e){var t=A.range(this.state.startTime,e),a=Array.from(t.by("minutes",{step:30}));this.setState({endTime:e,timeRange:a})}},{key:"handleProjectNameChange",value:function(e){this.setState({projectName:e})}},{key:"handleProjectEmojiChange",value:function(e){this.setState({projectEmoji:e})}},{key:"handleAddProject",value:function(e){var t={};t[this.state.projectName]=this.state.projectEmoji,this.setState((function(e){return{projects:I({},e.projects,{},t)}}));var a=this.state.projects;a[this.state.projectName]=this.state.projectEmoji,localStorage.setItem("projects",JSON.stringify(a))}},{key:"handleDeleteProject",value:function(e){var t=this.state.projects;delete t[e.target.value],this.setState({projects:t}),localStorage.setItem("projects",JSON.stringify(t))}},{key:"handleFileUpload",value:function(){this.setState({projects:localStorage.getItem("projects")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N,{startDate:this.state.startDate,endDate:this.state.endDate,startTime:this.state.startTime,endTime:this.state.endTime,dateRange:this.state.dateRange,timeRange:this.state.timeRange,handleStartDate:this.handleStartDate.bind(this),handleEndDate:this.handleEndDate.bind(this),handleStartTime:this.handleStartTime.bind(this),handleEndTime:this.handleEndTime.bind(this),projects:this.state.projects,emoji:this.state.emoji,handleAddProject:this.handleAddProject.bind(this),handleProjectNameChange:this.handleProjectNameChange.bind(this),handleProjectEmojiChange:this.handleProjectEmojiChange.bind(this),handleDeleteProject:this.handleDeleteProject.bind(this),handleFileUpload:this.handleFileUpload.bind(this)})),r.a.createElement("div",null,r.a.createElement(v,{dateRange:this.state.dateRange,timeRange:this.state.timeRange})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,a){},59:function(e,t,a){e.exports=a(128)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.e9176d81.chunk.js.map