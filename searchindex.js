Search.setIndex({docnames:["Config","Discretizer","EquationSystem","EquationTranspiler","TemplateTranspiler","TimeIntegratorUnit","Transpiler","c_transpiler","code_generation","compilation","cuda_transpiler","developer","discretization","execution","generate_test_codes","index","main_codegen","main_compile","main_debug","main_disc","main_run","omp_transpiler","opencl_transpiler","overview","requirements","start","tests","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["Config.rst","Discretizer.rst","EquationSystem.rst","EquationTranspiler.rst","TemplateTranspiler.rst","TimeIntegratorUnit.rst","Transpiler.rst","c_transpiler.rst","code_generation.rst","compilation.rst","cuda_transpiler.rst","developer.rst","discretization.rst","execution.rst","generate_test_codes.rst","index.rst","main_codegen.rst","main_compile.rst","main_debug.rst","main_disc.rst","main_run.rst","omp_transpiler.rst","opencl_transpiler.rst","overview.rst","requirements.rst","start.rst","tests.rst","usage.rst"],objects:{"":{Config:[0,0,0,"-"],Discretizer:[1,0,0,"-"],EquationSystem:[2,0,0,"-"],EquationTranspiler:[3,0,0,"-"],TemplateTranspiler:[4,0,0,"-"],TimeIntegratorUnit:[5,0,0,"-"],Transpiler:[6,0,0,"-"],c_transpiler:[7,0,0,"-"],cuda_transpiler:[10,0,0,"-"],generate_test_codes:[14,0,0,"-"],main_codegen:[16,0,0,"-"],main_compile:[17,0,0,"-"],main_debug:[18,0,0,"-"],main_disc:[19,0,0,"-"],main_run:[20,0,0,"-"],omp_transpiler:[21,0,0,"-"],opencl_transpiler:[22,0,0,"-"]},"Config.Config":{__init__:[0,2,1,""]},"Discretizer.Discretizer":{create_timestep_dict:[1,2,1,""],var_with_n:[1,2,1,""],var_with_nplus1:[1,2,1,""]},"EquationSystem.EquationSystem":{__init__:[2,2,1,""],app:[2,2,1,""],get_equations:[2,2,1,""],print_equations:[2,2,1,""],set_equations:[2,2,1,""]},"EquationSystem.ODE":{annotate_TIU:[2,2,1,""],annotate_dependent_system:[2,2,1,""],equations_canonic:[2,2,1,""]},"EquationSystem.TimeIntegratedEquationSystem":{subs_deltaT:[2,2,1,""]},"EquationSystem.TimeIntegratorAnnotatedODE":{transform_ODE:[2,2,1,""],transform_TIES:[2,2,1,""]},"EquationTranspiler.CBased_EquationTranspiler":{correct_datatype:[3,2,1,""],declare_RK_array:[3,2,1,""],declare_local_variable:[3,2,1,""],generate_assignment:[3,2,1,""],generate_loop:[3,2,1,""],generate_loop_body:[3,2,1,""],generate_print_code:[3,2,1,""],inorder:[3,2,1,""]},"EquationTranspiler.EquationTranspiler":{correct_datatype:[3,2,1,""],declare_RK_array:[3,2,1,""],declare_local_variable:[3,2,1,""],generate_assignment:[3,2,1,""],generate_loop:[3,2,1,""],generate_print_code:[3,2,1,""],inorder:[3,2,1,""]},"TemplateTranspiler.TemplateTranspiler":{__init__:[4,2,1,""],adapt_line:[4,2,1,""],adapt_records:[4,2,1,""],adapted_record_file:[4,2,1,""],array_element_symbol:[4,2,1,""],correct_datatype:[4,2,1,""],declare_RK_array:[4,2,1,""],declare_local_variable:[4,2,1,""],dir_name:[4,2,1,""],equation_transpiler_class:[4,2,1,""],generate:[4,2,1,""],generate_config:[4,2,1,""],generate_equations:[4,2,1,""],generate_local_variables:[4,2,1,""],generate_loop:[4,2,1,""],generate_print_code:[4,2,1,""],inorder:[4,2,1,""],line_is_marker:[4,2,1,""],line_needs_adaptment:[4,2,1,""],load_record:[4,2,1,""],marked_string:[4,2,1,""],marker:[4,2,1,""],print_results:[4,2,1,""],read_modules:[4,2,1,""],template_file_dict:[4,2,1,""],unmark_string:[4,2,1,""],vectorize:[4,2,1,""]},"TimeIntegratorUnit.BackwardEuler":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.BackwardRungeKutta":{compute_stages:[5,2,1,""],default_assumptions:[5,3,1,""],make_Jacobi_matrix:[5,2,1,""],substitute_at_end:[5,2,1,""]},"TimeIntegratorUnit.BackwardRungeKutta1":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.DIRK2":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.DIRK3":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.DIRK4":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],substitute_at_end:[5,2,1,""]},"TimeIntegratorUnit.DependentSystemTimeIntegratorUnit":{__init__:[5,2,1,""],default_assumptions:[5,3,1,""],get_additional_config_variables:[5,2,1,""],get_lhs_var:[5,2,1,""],time_tendencies:[5,2,1,""]},"TimeIntegratorUnit.ExplicitEuler":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.GL4":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.Heun":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.ImplicitMidpoint":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.Midpoint":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.MultiDependencyTimeIntegratorUnit":{__init__:[5,2,1,""],default_assumptions:[5,3,1,""],get_lhs_var:[5,2,1,""],time_tendencies:[5,2,1,""]},"TimeIntegratorUnit.OperatorSplitting":{__init__:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.OrdinarySplitting":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.RungeKutta":{compute_stages:[5,2,1,""],default_assumptions:[5,3,1,""]},"TimeIntegratorUnit.RungeKutta1":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.RungeKutta2":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.RungeKutta4":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.StrangSplitting":{adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],number_eqs_added:[5,3,1,""]},"TimeIntegratorUnit.TimeIntegratorUnit":{__init__:[5,2,1,""],adapt_terms:[5,2,1,""],default_assumptions:[5,3,1,""],get_additional_config_variables:[5,2,1,""],get_lhs_var:[5,2,1,""],number_eqs_added:[5,3,1,""],resolve:[5,2,1,""],set_deltaT:[5,2,1,""],time_tendencies:[5,2,1,""]},"Transpiler.Transpiler":{__init__:[6,2,1,""],generate:[6,2,1,""],generate_loop:[6,2,1,""],implement_approximation_loop:[6,2,1,""]},"c_transpiler.C_Transpiler":{adapt_records:[7,2,1,""],dir_name:[7,3,1,""],equation_transpiler_class:[7,3,1,""],generate_config:[7,2,1,""],marker:[7,3,1,""],print_results:[7,3,1,""],template_file_dict:[7,3,1,""]},"c_transpiler.Simple_C_Transpiler":{generate:[7,2,1,""],generate_loop:[7,2,1,""],implement_iterative_loop:[7,2,1,""],inorder:[7,2,1,""],main:[7,2,1,""],output_digits:[7,3,1,""]},"cuda_transpiler.CUDA_Transpiler":{adapt_parameter_name:[10,2,1,""],adapt_variable_name:[10,2,1,""],dir_name:[10,3,1,""],equation_transpiler_class:[10,3,1,""],generate_config:[10,2,1,""],generate_step_assignments:[10,2,1,""],intermediate_buffer:[10,3,1,""],marker:[10,3,1,""],parameter_buffer:[10,3,1,""],result_buffer:[10,3,1,""],template_file_dict:[10,3,1,""],vectorize:[10,3,1,""]},"main_compile.C":{flags:[17,3,1,""],key:[17,3,1,""],path:[17,3,1,""]},"main_compile.C2":{flags:[17,3,1,""],key:[17,3,1,""],path:[17,3,1,""]},"main_compile.CUDA":{flags:[17,3,1,""],key:[17,3,1,""],path:[17,3,1,""]},"main_compile.CodeType":{__init__:[17,2,1,""],flags:[17,2,1,""],includes:[17,2,1,""],key:[17,2,1,""],links:[17,2,1,""],path:[17,2,1,""],verbose_flags:[17,2,1,""]},"main_compile.CompileInstance":{__init__:[17,2,1,""],compile_code:[17,2,1,""],read_record:[17,2,1,""]},"main_compile.Compiler":{__init__:[17,2,1,""],compile_code:[17,2,1,""],config_file:[17,3,1,""],key:[17,2,1,""],read_modules:[17,2,1,""],verbose:[17,3,1,""]},"main_compile.GNU":{key:[17,3,1,""]},"main_compile.Intel":{key:[17,3,1,""]},"main_compile.NVCC":{key:[17,3,1,""]},"main_compile.OpenCL":{flags:[17,3,1,""],includes:[17,3,1,""],key:[17,3,1,""],links:[17,3,1,""],path:[17,3,1,""]},"main_compile.OpenMP":{flags:[17,3,1,""],key:[17,3,1,""],path:[17,3,1,""],verbose_flags:[17,3,1,""]},"omp_transpiler.OMP_Transpiler":{adapt_backwardRK_variables:[21,2,1,""],adapt_parameter_name:[21,2,1,""],adapt_variable_name:[21,2,1,""],dir_name:[21,3,1,""],equation_transpiler_class:[21,3,1,""],generate_assignments:[21,2,1,""],generate_config:[21,2,1,""],generate_equations:[21,2,1,""],generate_loop:[21,2,1,""],generate_vectorizable_forloop:[21,2,1,""],intermediate_buffer:[21,3,1,""],last_step_buffer:[21,3,1,""],marker:[21,3,1,""],parameter_buffer:[21,3,1,""],result_buffer:[21,3,1,""],simd_scale:[21,3,1,""],template_file_dict:[21,3,1,""],vectorize:[21,3,1,""],vectorizeFor:[21,3,1,""]},"opencl_transpiler.OpenCL_Transpiler":{adapt_parameter_name:[22,2,1,""],adapt_variable_name:[22,2,1,""],dir_name:[22,3,1,""],equation_transpiler_class:[22,3,1,""],generate_config:[22,2,1,""],generate_step_assignments:[22,2,1,""],intermediate_buffer:[22,3,1,""],marker:[22,3,1,""],parameter_buffer:[22,3,1,""],result_buffer:[22,3,1,""],template_file_dict:[22,3,1,""],vectorize:[22,3,1,""]},Config:{Config:[0,1,1,""]},Discretizer:{Discretizer:[1,1,1,""]},EquationSystem:{EquationSystem:[2,1,1,""],ODE:[2,1,1,""],TimeIntegratedEquationSystem:[2,1,1,""],TimeIntegratorAnnotatedODE:[2,1,1,""]},EquationTranspiler:{CBased_EquationTranspiler:[3,1,1,""],EquationTranspiler:[3,1,1,""]},TemplateTranspiler:{TemplateTranspiler:[4,1,1,""]},TimeIntegratorUnit:{BackwardEuler:[5,1,1,""],BackwardRungeKutta1:[5,1,1,""],BackwardRungeKutta:[5,1,1,""],DIRK2:[5,1,1,""],DIRK3:[5,1,1,""],DIRK4:[5,1,1,""],DependentSystemTimeIntegratorUnit:[5,1,1,""],ExplicitEuler:[5,1,1,""],GL4:[5,1,1,""],Heun:[5,1,1,""],ImplicitMidpoint:[5,1,1,""],Midpoint:[5,1,1,""],MultiDependencyTimeIntegratorUnit:[5,1,1,""],OperatorSplitting:[5,1,1,""],OrdinarySplitting:[5,1,1,""],RungeKutta1:[5,1,1,""],RungeKutta2:[5,1,1,""],RungeKutta4:[5,1,1,""],RungeKutta:[5,1,1,""],StrangSplitting:[5,1,1,""],TimeIntegratorUnit:[5,1,1,""],annotation_dict:[5,4,1,""],get_default_additional_variables:[5,5,1,""]},Transpiler:{Transpiler:[6,1,1,""]},c_transpiler:{C_Transpiler:[7,1,1,""],Simple_C_Transpiler:[7,1,1,""]},cuda_transpiler:{CUDA_Transpiler:[10,1,1,""]},generate_test_codes:{main:[14,5,1,""],make_all_tests:[14,5,1,""],make_multiple_test_inputs:[14,5,1,""],test_case:[14,5,1,""]},main_codegen:{main:[16,5,1,""]},main_compile:{C2:[17,1,1,""],C:[17,1,1,""],CUDA:[17,1,1,""],CodeType:[17,1,1,""],CompileInstance:[17,1,1,""],Compiler:[17,1,1,""],GNU:[17,1,1,""],Intel:[17,1,1,""],NVCC:[17,1,1,""],OpenCL:[17,1,1,""],OpenMP:[17,1,1,""],class_match:[17,4,1,""],main:[17,5,1,""]},main_disc:{main:[19,5,1,""]},main_run:{make_plot:[20,5,1,""],run_config_template:[20,5,1,""],test:[20,5,1,""]},omp_transpiler:{OMP_Transpiler:[21,1,1,""]},opencl_transpiler:{OpenCL_Transpiler:[22,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:data","5":"py:function"},terms:{"0_data":[25,27],"2_data":[25,27],"2nd":5,"3nd":5,"4567f":3,"4th":[5,25,27],"\u03bb_1":5,"\u03bb_2":5,"\u03c3":5,"\u1ef9_nplus1":5,"abstract":[3,4,5,6,7,8,12,17,23],"anf\u00fchrungszeichen":25,"ausf\u00fchrung":15,"boolean":[3,4,6,21],"case":[25,27],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,17,21,22,23,25,27],"default":[3,4,6,12,16,17,23,25,27],"final":[5,25,27],"float":[2,3,4,6,7,10,16,21,22],"function":[1,2,3,4,5,6,7,8,9,11,13,18,21,23,24,25,27],"import":[5,16,25,27],"int":[3,4,6,10,21,22],"long":2,"new":[10,15,21,22,25,27],"return":[1,2,3,4,5,6,10,12,17,21,22,23],"static":17,"true":[7,10,17,21,22],"var":[1,5,25,27],"while":[3,4,5,6,8,21,23],Adding:15,For:[3,5,6,12,15,23,24,25,27],Its:5,Not:7,ODE:[1,2,4,5,6,8,10,12,13,15,16,19,20,21,22,23,27],ODEs:2,TIES:5,That:5,The:[1,2,3,4,5,6,7,8,12,15,16,17,21,23,25,27],Then:[25,27],There:[8,11,12,23,25,27],These:[2,4,8,23,25,27],Use:[5,7],Uses:6,Using:3,Was:15,__init__:[0,2,4,5,6,17],a_21:5,a_31:5,a_32:5,a_ii:5,a_s1:5,a_s2:5,a_s:5,abc:[2,3,6,9,17,23],abl:[5,15],abov:[12,23,25,27],accept:4,accord:5,accur:[2,5,17],adapt:[3,4,11,21],adapt_backwardrk_vari:21,adapt_lin:4,adapt_parameter_nam:[10,21,22],adapt_record:[4,7],adapt_term:[5,12,23],adapt_variable_nam:[10,21,22,25],adapted_record_fil:4,add:[4,7,8,9,10,21,22,23,25,27],added:[5,8,15,23,25],addend:[25,27],adding:[8,21,23],addit:[4,5,6,7,8,9,11,13,17,23,25,27],addition:[8,11,22,23],additional_flag:17,after:[5,25,27],again:[5,25,27],against:[25,27],algorithm:[5,7],alia:[7,10,21,22],all:[1,2,4,5,8,11,12,17,20,23,24,25,27],allia:4,allow:[15,27],almost:5,alpha1:25,alpha2:25,alreadi:[2,5,8,23,25,27],also:[5,8,11,23,25,27],alwai:5,ani:[3,5,12,23,25,27],anna:25,annot1:5,annot2:5,annot:[2,5,12,23],annot_equ:2,annot_list:5,annotate_dependent_system:2,annotate_tiu:[2,12,23],annotation_dict:[5,12,23],anymor:[25,27],anyth:27,app:[2,5],appear:[1,5,25,27],append:[4,5],appli:[2,3,15],applic:[3,4,6,17,21,23,25,27],approach:[12,15,23],approxim:[3,4,5],arbitrari:[2,27],architectur:15,aremultipl:25,arg:[13,23],argument:[8,13,23,25,27],arithmet:[25,27],arrai:[3,4,10,21,22],array_element_symbol:[4,10,21,22],array_nam:[3,4],assign:[3,10,21,22],assum:[1,3,25,27],ast:[3,4,6,21],attribut:[6,9,23],autom:15,automat:[15,25,27],avail:27,b_1:5,b_2:5,b_i:5,b_s:5,backend:2,backward:[5,12,21,23],backwardeul:[5,12,23],backwardrungekutta1:[5,12,23],backwardrungekutta:[5,12,23],base:[0,1,2,3,4,5,6,7,8,10,11,17,21,22,23],bash:25,bashcod:[25,27],basi:[8,11,15,23],basic:[5,8,23,25,27],becaus:21,befor:[25,27],begin:4,begin_start_sav:[13,23],being:[3,4,6,21],beispiel:15,below:[4,8,23],beschreibung:23,beta1:25,beta2:25,between:[2,5],bild:23,bit:[18,25],block:[3,4,6,21],block_siz:21,bodi:[3,4,6,21],bool:[3,4],boolalg:[3,4,6,21],both:[3,4,5,6,15],bothx:6,brk1:5,buffer:10,build:[0,25,27],built:25,burkhardt:5,butcher:5,butcher_tab:5,c_2:5,c_3:5,c_based_equation_transpil:[8,11,23],c_i:5,c_main_exec:[25,27],c_s:5,c_transpil:[8,11,23],c_transpiler2:7,calc_func:[7,22,25,27],calcu:27,calcul:[2,7,10,15,25,27],call:[3,4,5,7,10,21,22,25,27],can:[2,3,5,8,11,12,15,23,25,27],cannot:[5,12,23],canon:2,caus:[4,25],cbased_equationtranspil:[3,7,10,21,22],ccode:[25,27],cdot:25,ced:27,central:21,chang:[4,7,10,11,21,22,25,27],choos:[25,27],chosen:27,chronolog:[25,27],citeul:27,class_match:17,classmethod:[3,7],clean:[18,25,27],clean_record:[25,27],cls:[3,25,27],code:[3,4,6,7,9,10,13,15,16,17,18,21,22],code_directori:[8,16,23],code_modul:[8,23],code_output_directori:[4,6,7,10,21,22],code_templ:[10,21,22],code_typ:17,codeblock:[3,21],codegen:[3,4,6,7,8,10,11,16,21,22,23,25,27],codetyp:[9,17,23],com:[25,27],combin:[5,17,27],comma:[25,27],command:[25,27],comment:4,compil:[8,15,17,24,27],compile_cod:17,compile_record:17,compileinst:[9,17,23],compiler_config:[17,25,27],complet:[25,27],complic:7,compris:15,comput:[5,15],compute_stag:5,con:27,concentr:[25,27],condit:[3,4,6,7,8,21,23],config:[2,4,6,7,10,16,17,21,22,25,27],config_fil:[14,17],config_osc:[25,27],config_templ:[25,27],configpars:17,configur:[0,8,12,15,17,19,23,27],configuration_filenam:[12,19,23],configuration_templ:[19,25,27],confus:5,connect:[5,12,23],consist:[2,5,12,23,25,27],consol:4,constructor:[4,5,6,17],consum:15,conta:1,contain:[2,3,4,5,6,7,8,9,12,17,21,23,25,27],content:25,converg:[5,6],convers:4,convert:[3,8,23],convini:5,copi:3,core:[1,2,3,5],correct:[24,25,27],correct_datatyp:[3,4],correctli:[25,27],correspond:[1,2,4,5,6,7,8,9,12,17,23,25,27],correspondig:5,could:[25,27],counter:[3,4,6],counterx:6,cpp11:17,cpp:[10,17,21,22],creat:[2,4,5,7,8,12,21,23,25,27],create_timestep_dict:1,crucial:15,csv:[25,27],cuda:[8,9,10,17,23],cuda_transpil:[8,11,23,25],curr_eq:[2,4,6,7,8,21,23],curr_lh:[3,4],curr_method:2,current:[2,3,15,21,22,25,27],cycl:15,data:[4,6,7,10,16,19,21,22,25,27],data_typ:[3,4,6,7,8,10,16,21,22,23],datatyp:[3,4,6,16],deal:[10,21,22,25],debug:[2,18],declar:[3,4,25,27],declare_local_vari:[3,4],declare_rk_arrai:[3,4],default_assumpt:5,defin:[5,25,27],definit:[10,21,22],delet:[25,27],deltat:[2,5],denot:25,depend:[1,2,3,4,5,6,25,27],dependentsystemtimeintegratorunit:[2,5,12,23],deriv:[25,27],describ:[5,25,27],desktop:25,detail:[12,15,17,23],determin:6,develop:27,devid:25,diagon:[5,12,23],dicitonari:1,dict:[10,17],dictionari:[4,5,17],did:[25,27],diff:[25,27],differ:[5,8,12,21,23,25,27],dimension:15,dir_nam:[4,7,10,21,22],direc:27,direct:25,directli:[25,27],directori:[4,6,7,8,16,23,25,27],dirk2:[5,12,23],dirk3:[5,12,23],dirk4:[5,12,23],disc:[19,25,27],discret:[0,2,4,5,6,7,8,15,16,19],discrete_record:[4,7,10,16,21,22,25,27],discrete_records_filenam:[12,19,23],discretized_record:[25,27],dist_cod:5,distinct:5,divid:5,doc:[15,25],docstr:25,doe:[25,27],doku:[8,23],don:[25,27],done:[4,9,23,25,27],doubl:[3,7,16],due:5,dummi:[7,8,23],dure:[3,4],dynam:27,each:[5,9,23,25,27],earlier:5,easier:3,edit:[25,27],effici:[8,15,23],either:16,element:2,els:27,empti:[8,23,25,27],end:4,enough:[8,23],ensur:[2,5,12,23],enter:[25,27],enti:17,entri:[10,12,17,21,22,23,25],equal:[2,3,5,25,27],equat:[2,3,4,5,6,8,11,12,15,16,21,23,25,27],equation_transpiler_class:[4,7,10,21,22],equations_canon:2,equationsystem:5,equationtranspil:[4,7,8,10,21,22,23],equival:[3,6,12,23],erbt:11,error:[5,6,15,25,27],etc:[3,4,7,8,18,23],euler:[5,12,23,25,27],evalu:[15,25,27],everi:[1,4,5,6,8,11,12,23,25,27],everyth:[25,27],exact:[25,27],exactli:[5,25,27],exampl:[3,4,5,8,10,11,12,15,21,23],examplari:[25,27],example_configur:[25,27],exec:[4,6,7,8,10,21,22,23,25,27],exec_nam:[13,17,23],exec_path:[13,23],execut:[3,4,6,8,9,12,15,17,21],exemplari:[25,27],exist:[2,8,23,25,27],exp:25,explain:[15,25],explan:6,expli:27,explicit:[5,8,12,23,25,27],expliciteul:[5,12,23,25,27],expr:[3,7],express:[2,3,4,6,8,11,21,23],extend:[2,3,4,5,7,9,15,21],facilit:4,factor:15,fals:[3,7,21],famou:5,faster:[12,23],file:[0,3,4,5,6,7,8,9,10,12,16,17,19,21,22,23,25,27],filepath:[19,25,27],fill:[25,27],find:[15,25,27],finish:5,first:[5,15],first_step:15,fit:[25,27],flag:[9,17,23],florida:5,folder:[16,25,27],follo:27,follow:[3,5,6,8,10,11,12,21,23,24,25,27],form:[1,2,3,5,10,21,22,25,27],format:[3,25,27],formula:5,forx:6,found:[12,15,23,25,27],foundat:15,four:[5,12,23],from:[0,3,4,5,10,16,21,22,25,27],full:[15,24],functionparamet:[25,27],furthermor:24,futur:[15,27],gauss:[5,12,23],gcc:[24,25,27],gener:[3,4,5,6,7,10,11,16,17,19,21,22],generate_assign:[3,21],generate_config:[4,7,10,21,22,25],generate_equ:[4,21],generate_local_vari:4,generate_loop:[3,4,6,7,8,21,23],generate_loop_bodi:3,generate_print_cod:[3,4],generate_step_assign:[10,22],generate_vectorizable_forloop:21,get:[5,25,27],get_additional_config_vari:5,get_default_additional_vari:5,get_equ:2,get_lhs_var:5,given:[2,3,6,8,11,12,13,17,19,23],gl4:[5,12,23],gnu:[9,17,23,24],goal:15,grow:27,guid:[25,27],hand:[2,5],hap:27,happen:25,hard:27,hardwar:[15,27],has:[4,5,6,12,23,25,27],have:[5,9,23,25,27],heavili:5,help:[2,5,17],here:[8,10,13,21,22,23,25,27],heterogen:15,heun:[5,12,23,25,27],high:15,higher:[5,24],hit:[25,27],hold:[0,5,10],home:25,hopefulli:27,how:15,ident:[5,12,23],idp:25,ignor:[3,4,6],immut:2,imp:5,implemen:27,implement:[3,4,5,6,7,8,9,11,13,15,21,25,27],implement_approximation_loop:[6,8,23],implement_iterative_loop:7,impli:5,implicit:[4,5,6,8,11,12,16,21,23],implicitmidpoint:[5,12,23],improv:5,includ:[4,17],index:[1,4,5,10,15,21,22,25,27],indic:4,induc:5,info:[25,27],inform:[7,8,9,16,23,25,27],ini:[17,25,27],init:5,initi:[2,5,15,17,21,27],initialvalu:[5,25,27],inord:[3,4,7],input:[5,8,9,11,12,13,23,25,27],input_fil:[13,14,23],insert:[5,25,27],instal:24,instanc:[1,2,5,8,11,12,17,23],instanti:[5,8,12,23],instead:[5,7],instruct:[15,17],intefac:11,integ:27,integervalu:2,integr:[2,4,5,6,7,8,10,12,15,19,21,22,23,25,27],intel:[9,17,23],intend:5,interfac:[2,8,11,15,17,23],intermediari:10,intermediate_buff:[10,21,22],interpret:3,introduct:5,item:4,iter:[3,4,5,6,21],its:[3,5,12,23,25,27],itself:[3,5,12,23],john:5,just:27,k_i:5,kei:[8,12,17,21,22,23],keyword:17,kutta:[3,4,5,12,21,23,25,27],lai:15,lambda1:[5,25,27],lambda2:[25,27],lambda_1:25,lambda_2:25,languag:[3,4,6,7,8,11,14,16,23,25,27],last:[3,25,27],last_step_buff:21,later:[15,25,27],lation:27,lectur:5,left:[2,3,5,25,27],legendr:[5,12,23],length:[5,12,23,27],let:27,lhs:[5,25,27],lhs_list:5,lhs_var:5,lhs_var_n:5,librari:[15,24,25,27],liegt:15,like:[9,11,23,25,27],line:[3,4,21,25,27],line_is_mark:4,line_needs_adapt:4,link:[8,17,23,25],link_math:17,link_opencl:17,list:[2,5,8,12,17,19,23],load:[4,25,27],load_config:[25,27],load_input:[25,27],load_record:4,local:[3,4],localbuff:[10,22],localparamet:[10,22],locat:25,logic:[3,4,6,21],look:[10,11,21,22,25],loop:[3,4,6,7,8,16,21,23],loop_cont:[3,4,6,21],loop_iter:[3,4,6,7,8,21,23],loop_typ:[3,4,6,7,8,10,14,16,21,22,23],lower:5,main:[7,8,10,13,14,16,17,19,21,22,23,25,27],main_codegen:[8,23,25,27],main_compil:[9,23],main_debug:[25,27],main_disc:[12,23,25,27],main_run:[13,23],make:[3,11,22,25,27],make_all_test:14,make_jacobi_matrix:5,make_multiple_test_input:14,make_plot:20,makefil:[25,27],mani:27,manual:[5,15,27],map:[1,15],mark:[4,8,21,23],marked_str:4,marker:[4,7,8,10,21,22,23],mas:[25,27],match:17,mathemat:[3,8,11,12,23,25,27],matplotlib:24,matrix:5,maximum:6,mean:[3,25,27],measur:[25,27],member:[5,11],memori:5,method:[2,4,5,6,8,10,11,14,15,16,19,21,22,27],method_builder_dict:5,methoden:11,middl:5,midpoint:[5,12,23,25,27],might:4,minor:27,mode:[13,23],model:[15,16],modifi:4,modul:[8,12,15,23],module_fil:4,moduletyp:[0,4,6,7],moment:[7,16],more:[10,12,21,22,23,25],most:[5,25,27],mostli:[5,25,27],move:[25,27],multidependencytimeintegratorunit:[5,12,23],multipl:[5,27],mus:11,must:[5,8,11,23,24],n_step:14,name:[4,5,8,10,11,12,13,17,19,21,22,23,25,27],navig:[25,27],neccessari:[8,9,21,23],necessari:[25,27],need:[3,4,5,8,9,13,16,23,25,27],nest:21,newton:5,next:[5,25,27],noch:25,none:[4,6,7,10,14,16,17,19,21,22],normal:15,note:5,now:[5,25,27],nstep:27,num_combin:[13,23],num_equ:21,num_lin:14,num_step:[13,14,23],num_steps_comparison:14,number:[2,3,4,6,8,21,23,25,27],number_eqs_ad:5,numer:[7,10,21,22],nvcc:[9,17,23],object:[0,1,2,4,5,6,9,17,23,25,27],occur:[25,27],ode:27,odedsl:2,odeintegr:15,odeintegrationdsl:27,off:5,offset:[1,10,21,22],often:5,old:21,omp_transpil:[8,11,23,25],onc:5,one:[3,5,8,23,25,27],ones:3,onli:[3,5,8,12,16,21,23,25,27],onto:1,open:[25,27],opencl:[8,9,10,17,22,23],opencl_includ:17,opencl_link:17,opencl_transpil:[8,11,23,25],openmp:[4,8,9,17,21,23],oper:[5,12,23,25,27],operatorsplit:[5,12,23],operer:25,opposit:5,optimis:15,option:[6,8,9,12,13,17,23,25,27],optionen:15,order:[5,12,23,25,27],ordinari:5,ordinarysplit:[5,12,23,25,27],organ:[16,25],organis:[12,23],orient:5,orig_vari:2,origin:[2,4,5,7,10,21,22,25],oscil:[25,27],other:[3,4,5,6,7,8,12,13,21,23,25,27],otherwis:[4,6,21],output:[4,6,7,8,9,10,11,12,13,16,21,22,23,25,27],output_digit:7,output_directori:[4,6,7,10,16,21,22],output_fil:[13,23],over:6,overrid:[3,21,22],overview:[15,25],overwrit:21,overwritten:5,own:[20,25,27],page:15,pair:[8,23,25,27],panda:24,parallel:16,param:5,paramet:[0,1,2,3,4,5,6,7,10,13,15,16,17,19,21,22,23,27],parameter_buff:[10,21,22],parameter_count:[10,21,22],parameternam:27,parametervalue1:[25,27],parametervalue2:[25,27],parent:[7,12,21,23],part:[4,10,21,25,27],pass:[2,3,8,23],passen:25,passt:25,past:[10,21,22,25],path:[4,6,7,9,14,16,17,19,23,25,27],pdf:15,pen:27,perfect:15,perform:15,pipelin:[15,23],place:[25,27],pleas:[25,27],plot:[15,27],plotter:[25,27],point:[3,5,25,27],posit:[8,23,27],possibl:[3,4,6,8,11,23,25,27],pow:3,pre:25,prefix:[25,27],preimplement:27,previou:[25,27],previous:25,primarli:5,print:[2,3,7],print_equ:2,print_result:[4,7],prior:[2,12,23],probabl:[25,27],problem:[5,25],produ:27,produc:[8,12,15,23,25,27],program:[15,16,24],prone:15,proper:15,properti:[4,8,11,17,23],provid:[1,7,8,11,15,23],put:[4,5],python:[8,12,15,23,24,25],read:[0,4,17],read_modul:[4,17],read_record:17,rec:6,record:[0,4,6,7,10,15,16,17,19,21,22,27],record_1:[4,7,10,16,21,22,25,27],record_fil:[4,7],record_filenam:[4,7,8,10,16,21,22,23],recurs:[3,25,27],refer:5,referenc:[25,27],rel:[25,27],relat:[2,3,5],relev:21,reload:4,remov:4,replac:[3,4,6,8,23],repo:25,reponam:25,repositori:[25,27],repres:[3,5,6],represent:[2,15],requir:[3,4,6,25,27],reserv:25,reshap:1,resolv:5,respect:[3,5,25],respons:[25,27],rest:[25,27],result:[3,4,5,7,10],result_buff:[10,21,22],rewritten:5,rho:[10,21,22],rhs:[4,25,27],riabl:27,right:[5,25,27],rk0:21,rk1:[5,12,23],rk2:[5,12,23],rk4:[5,12,23,25,27],rst:25,run:[15,20,27],run_config_templ:20,rung:[3,4,5,12,21,23,25,27],rungekutta1:[5,12,23,25,27],rungekutta2:[5,12,23,25,27],rungekutta4:[5,12,23,25,27],rungekutta:[5,12,23,25,27],sai:27,same:[3,5,8,10,11,21,22,23,25],save:[4,5,6],scientif:5,script:[8,9,12,13,16,17,19,23],seaborn:24,search:[15,25,27],second:[5,21,25,27],section:[4,17,25,27],see:[2,4,5,8,10,12,17,21,22,23],seen:5,select:[12,17,22,23,25],self:[2,4,5,6,7,8,17,21,23],semant:25,seper:[5,25,27],serv:15,set:[15,21,22,25,27],set_deltat:5,set_equ:2,setup:15,shell:[25,27],should:[1,2,3,4,5,6,17,25,27],show:[25,27],side:[2,5,25,27],signatur:[2,5,17],simd:21,simd_scal:21,similar:[3,25,27],simpl:[25,27],simple_c_transpil:[3,7,8,11,23],singl:[5,25,27],skip:[25,27],slide:5,slope:5,solut:[4,5,6,10,13,15,21,22,23],solver:[8,15,16,23],some:[3,4,8,12,23,25,27],sourc:[0,1,2,3,4,5,6,7,10,14,16,17,19,20,21,22],space:[5,15],specif:[1,3,4,5,6,8,12,17,23,25,27],specifi:[2,3,4,6,8,12,15,17,21,23,27],spectiv:27,split:[5,12,23,25,27],src:[2,4,7,8,10,11,21,22,23,25,27],sta:27,stabl:5,stage:[3,4,5,7,9,15,20,21],stagerung:5,standard:[12,13,21,23,25],start:[4,25,27],startup:[25,27],state:5,statement:3,step:[3,4,5,8,10,15,21,22,23],still:5,store:[5,25,27],str:[2,3,4,6,7,10,16,17,19,21,22],strang:[5,12,23],strangsplit:[5,12,23,25,27],strict:5,string:[3,4,5,6,10,12,17,21,22,23,25,27],structur:[5,15,21],style:[13,23],sub:3,subclass:[3,4,5,6,8,9,11,12,17,23],subdirectori:[4,8,23],subs_deltat:2,substitut:[2,8,23],substitute_at_end:5,superclass:22,suppos:27,sure:[25,27],symbol:[1,2,3,4,5,10,15,21,22,25,27],sympi:[1,2,3,4,5,6,8,10,12,15,21,22,23,24,25,27],syntax:3,sysstem:[8,23],system:[4,5,6,8,10,12,13,14,16,19,20,21,22,23,24,25,27],systemat:[25,27],t_n:[3,5],t_nplus1:5,tabl:5,tableau:5,take:[12,23,25,27],tangent:5,target:[4,17],target_compil:17,target_record_filenam:16,task:15,tation:27,techniqu:[5,25,27],templat:[3,4,5,6,12,15],template_file_dict:[4,7,10,21,22],templatetranspil:[3,7,8,10,11,21,22,23],tendenc:5,tent:27,term:[5,12,23,25,27],termnum:5,test:[4,18,20,25,27],test_cas:14,test_input:[25,27],test_input_osc:[25,27],than:[3,5,10,21,22,25],them:[0,8,17,23,25,27],themselv:[8,23],therefor:2,thi:[1,2,3,4,5,6,7,8,11,12,15,17,21,23,25,27],thing:[25,27],third:[25,27],thod:27,those:5,three:5,threshold:6,through:[5,25,27],thu:[5,15],tidowa:25,ties:5,time:[3,4,5,6,10,12,15,21,22,23,25,27],time_block:21,time_offset:[10,21,22],time_tend:5,timeintegr:2,timeintegratedannotatedod:2,timeintegratedequationsystem:[2,5],timeintegratorannotatedod:[2,5,12,23],timeintegratorunit:[2,12,23],timeintegratorunitclass:[12,23],timestep:[1,5,10,12,21,22,23,27],timesteplength:27,tiu1:5,tiu2:5,todo:[8,15,23],togeth:5,tori:27,transform:2,transform_od:2,transform_ti:2,translat:3,transpil:[4,7,10,15,21,22],travers:3,treat:[3,5],tree:3,tridiagon:5,tupl:[1,2,5,25,27],turn:[12,23],two:[5,15,25,27],txt:[8,23],type:[0,2,3,4,5,6,7,8,9,16,17,21,23,25,27],typic:5,u_n:5,u_t:5,uni:25,unit:[25,27],univers:5,unless:27,unmark_str:4,unneccessarili:7,until:5,usag:24,use:[3,5,8,9,11,15,21,23],used:[2,3,4,5,6,7,8,12,15,16,17,19,23,25,27],uses:[5,8,16,23],using:[12,15,17,25,27],usual:[8,15,23],valid:6,valu:[2,3,4,5,6,8,15,21,23,27],var_with_n:1,var_with_nplus1:1,variabl:[0,1,2,3,4,5,7,10,12,21,22,23,25,27],variable_nam:[4,10,21,22],variablelist:[25,27],variablelookupt:1,variablenam:27,variablevalu:[25,27],variablevalue1:[25,27],variablevalue2:[25,27],variou:6,vec_info:17,vector:[3,4,5,7,10,17,21,22],vectoriz:21,vectorizefor:21,verbos:17,verbose_flag:17,veri:15,version:[1,4,5,7,15,24,25,27],von:11,wai:[25,27],want:[25,27],well:[25,27],what:27,when:5,where:[2,4,5,6,7,8,21,23],whether:[3,4],which:[3,4,5,6,7,15,16,25,27],whitespac:[25,27],whole:4,whose:5,window:[25,27],wing:27,without:[12,23],work:[8,23,25,27],would:[7,25,27],write:[7,15,27],written:4,x_0_rk0:21,x_1:[10,21,22],x_1_nplus1:1,x_2_n:1,x_i:[1,5],x_i_n:3,x_n:[5,12,23],y_i:5,y_n:5,y_nplus1:5,yes:[25,27],yet:7,yield:[25,27],you:[25,27],your:[8,20,23,25,27]},titles:["Config module","Discretizer module","EquationSystem module","EquationTranspiler module","TemplateTranspiler module","TimeIntegratorUnit module","Transpiler module","c_transpiler module","Code Generation","Compilation","cuda_transpiler module","About Transpilers","Discretization","Execution","generate_test_codes module","General Usage","main_codegen module","main_compile module","main_debug module","main_disc module","main_run module","omp_transpiler module","opencl_transpiler module","Overview","Requirements","First steps","Tests","Usage"],titleterms:{"new":[8,11,12,23],Adding:[8,11,12,23],ODE:25,The:11,about:11,c_transpil:7,code:[8,11,23,25,27],compil:[9,23,25],config:0,configur:25,cuda_transpil:10,cycl:[25,27],discret:[1,12,23,25,27],equationsystem:2,equationtranspil:3,exampl:[25,27],execut:[13,23,25,27],exist:11,extend:[8,12,13,23],first:[25,27],full:[25,27],gener:[8,15,23,25,27],generate_test_cod:14,how:[25,27],implement:[12,23],indic:15,initi:25,instruct:[25,27],klassendiagramm:11,main_codegen:16,main_compil:17,main_debug:18,main_disc:19,main_run:20,method:[12,23,25],modul:[0,1,2,3,4,5,6,7,10,14,16,17,18,19,20,21,22],motiv:15,ode:25,odeintegr:[25,27],omp_transpil:21,opencl_transpil:22,overview:23,paramet:25,parameternam:25,plot:25,process:11,program:[25,27],record:25,requir:24,run:25,setup:[25,27],specifi:25,stage:[8,12,13,23,25,27],step:[25,27],structur:[12,23],tabl:15,templat:[8,11,23],templatetranspil:4,test:26,timeintegratorunit:5,todo:[10,16,18,21,22,25],transpil:[6,8,11,23],usag:[15,27],use:[25,27],usermanu:15,using:[8,11,23],valu:25,variablenam:25,write:25}})