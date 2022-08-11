jQuery(window).on("load", function(){
    $("html, body").animate({ scrollTop: 0 }, 0)

    var is_test_flag = false

    var is_batch_size_correct_flag = true
    var is_latent_dim_correct_flag = true
    var is_dropout_correct_flag = true
    var is_lr_correct_flag = true
    var is_anneal_cap_correct_flag = true
    var is_factors_correct_flag = true
    var is_num_ng_correct_flag = true
    var is_node_dropout_correct_flag = true
    var is_mess_dropout_correct_flag = true
    var is_reg1_correct_flag = true
    var is_reg2_correct_flag = true
    var is_num_layers_correct_flag = true
    var is_maxk_correct_flag = true
    var is_alpha_correct_flag = true
    var is_elastic_correct_flag = true
    var is_context_window_correct_flag = true
    var is_rho_correct_flag = true
    var is_reg_correct_flag = true

    var is_batch_size_choice_flag = false
    var is_latent_dim_choice_flag = false
    var is_dropout_choice_flag = false
    var is_lr_choice_flag = false
    var is_anneal_cap_choice_flag = false
    var is_factors_choice_flag = false
    var is_num_ng_choice_flag = false
    var is_node_dropout_choice_flag = false
    var is_mess_dropout_choice_flag = false
    var is_reg1_choice_flag = false
    var is_reg2_choice_flag = false
    var is_num_layers_choice_flag = false
    var is_maxk_choice_flag = false
    var is_alpha_choice_flag = false
    var is_elastic_choice_flag = false
    var is_context_window_choice_flag = false
    var is_rho_choice_flag = false
    var is_reg_choice_flag = false

    // Initialize the webpage
    $("#copy_success_alert_id").hide()

    $("#optimization_metric_selector_id option[id='opt_metric_NDCG']").attr("selected", "selected")
    $("#algo_name_selector_id option[id='alg_name_Multi-VAE']").attr("selected", "selected")
        $("#alg_name_EASE").show()
        $("#alg_name_FM").show()
        $("#alg_name_NFM").show()
        $("#alg_name_NEUMF").show()
        $("#alg_name_InfAE").show()
        $("#alg_name_ItemKNN").show()
        $("#alg_name_Item2Vec").show()
        $("#alg_name_LightGCN").show()
        $("#alg_name_MF").show()
        $("#alg_name_MostPop").hide()
        $("#alg_name_Multi-VAE").show()
        $("#alg_name_NGCF").show()
        $("#alg_name_PureSVD").show()
        $("#alg_name_SLIM").show()
    $("#dataset_selector_id option[id='dataset_ML-100k']").attr("selected", "selected")
    $("#preprocess_selector_id option[id='preprocess_Origin']").attr("selected", "selected")
    $("#test_method_selector_id option[id='test_method_TSBR']").attr("selected", "selected")
    $("#val_method_selector_id option[id='val_method_TSBR']").attr("selected", "selected")
    $("#sample_method_selector_id").val("");
    $("#sample_method_selector_id").attr("Disabled", "Disabled");
    $("#init_method_selector_id option[id='ini_method_Default']").attr("selected", "selected");
        $("#ini_method_Default").show()
        $("#ini_method_Normal").show()
        $("#ini_method_Uniform").show()
        $("#ini_method_Xavier_Normal").show()
        $("#ini_method_Xavier_Uniform").show()
    $("#optimizer_selector_id option[id='optimizer_Default']").attr("selected", "selected");
    $("#early_stop_selector_id option[id='early_stop_True']").attr("selected", "selected");
    $("#loss_type_selector_id").attr("Disabled", "Disabled");
    $("#loss_type_selector_id").val("")

    $("#hyperopt_trail_input_id").val(20)
        $("#hyperopt_trail_warning_id").hide()
    $("#preprocess_number_input_id").attr("Disabled", "Disabled")
        $("#preprocess_number_warning_id").hide()
    $("#test_size_input_id").val(0.2)
        $("#test_size_warning_id").hide()
    $("#val_size_input_id").val(0.1)
        $("#val_size_warning_id").hide()
    $("#topk_input_id").val(50)
        $("#topk_warning_id").hide()
    $("#fold_num_input_id").attr("Disabled", "Disabled")
        $("#fold_num_warning_id").hide()
    $("#epoch_input_id").val(50)
        $("#epoch_warning_id").hide()
    $("#cand_num_input_id").val(1000)
        $("#cand_num_warning_id").hide()
    $("#sample_ratio_input_id").attr("Disabled", "Disabled")
        $("#sample_ratio_warning_id").hide()
    $("#gpu_input_id").val("0")

    $("#page-title2_id").hide()
    $("#second_card_id").hide()

    $("#batch_size_id").show()
    $("#latent_dim_id").show()
    $("#dropout_id").show()
    $("#lr_id").show()
    $("#anneal_cap_id").show()
    $("#factors_id").hide()
    $("#num_ng_id").hide()
    $("#node_dropout_id").hide()
    $("#mess_dropout_id").hide()
    $("#reg1_id").hide()
    $("#reg2_id").hide()
    $("#num_layers_id").hide()
    $("#maxk_id").hide()
    $("#alpha_id").hide()
    $("#elastic_id").hide()
    $("#context_window_id").hide()
    $("#rho_id").hide()
    $("#reg_id").hide()

    $("#batch_size_int_id").hide()
    $("#batch_size_int_choice_id").hide()
    $("#batch_size_space_id").hide()
    $("#batch_size_group_id").hide()
    $("#batch_size_choice_group_id").hide()
    $("#latent_dim_int_id").hide()
    $("#latent_dim_int_choice_id").hide()
    $("#latent_dim_space_id").hide()
    $("#latent_dim_group_id").hide()
    $("#latent_dim_choice_group_id").hide()
    $("#dropout_float_id").hide()
    $("#dropout_float_choice_id").hide()
    $("#dropout_space_id").hide()
    $("#dropout_group_id").hide()
    $("#dropout_choice_group_id").hide()
    $("#lr_float_id").hide()
    $("#lr_float_choice_id").hide()
    $("#lr_space_id").hide()
    $("#lr_group_id").hide()
    $("#lr_choice_group_id").hide()
    $("#anneal_cap_float_id").hide()
    $("#anneal_cap_float_choice_id").hide()
    $("#anneal_cap_space_id").hide()
    $("#anneal_cap_group_id").hide()
    $("#anneal_cap_choice_group_id").hide()
    $("#factors_int_id").hide()
    $("#factors_int_choice_id").hide()
    $("#factors_space_id").hide()
    $("#factors_group_id").hide()
    $("#factors_choice_group_id").hide()
    $("#num_ng_int_id").hide()
    $("#num_ng_int_choice_id").hide()
    $("#num_ng_space_id").hide()
    $("#num_ng_group_id").hide()
    $("#num_ng_choice_group_id").hide()
    $("#node_dropout_float_id").hide()
    $("#node_dropout_float_choice_id").hide()
    $("#node_dropout_space_id").hide()
    $("#node_dropout_group_id").hide()
    $("#node_dropout_choice_group_id").hide()
    $("#mess_dropout_float_id").hide()
    $("#mess_dropout_float_choice_id").hide()
    $("#mess_dropout_space_id").hide()
    $("#mess_dropout_group_id").hide()
    $("#mess_dropout_choice_group_id").hide()
    $("#reg1_float_id").hide()
    $("#reg1_float_choice_id").hide()
    $("#reg1_space_id").hide()
    $("#reg1_group_id").hide()
    $("#reg1_choice_group_id").hide()
    $("#reg2_float_id").hide()
    $("#reg2_float_choice_id").hide()
    $("#reg2_space_id").hide()
    $("#reg2_group_id").hide()
    $("#reg2_choice_group_id").hide()
    $("#num_layers_int_id").hide()
    $("#num_layers_int_choice_id").hide()
    $("#num_layers_space_id").hide()
    $("#num_layers_group_id").hide()
    $("#num_layers_choice_group_id").hide()
    $("#maxk_int_id").hide()
    $("#maxk_int_choice_id").hide()
    $("#maxk_space_id").hide()
    $("#maxk_group_id").hide()
    $("#maxk_choice_group_id").hide()
    $("#alpha_float_id").hide()
    $("#alpha_float_choice_id").hide()
    $("#alpha_space_id").hide()
    $("#alpha_group_id").hide()
    $("#alpha_choice_group_id").hide()
    $("#elastic_float_id").hide()
    $("#elastic_float_choice_id").hide()
    $("#elastic_space_id").hide()
    $("#elastic_group_id").hide()
    $("#elastic_choice_group_id").hide()
    $("#context_window_int_id").hide()
    $("#context_window_int_choice_id").hide()
    $("#context_window_space_id").hide()
    $("#context_window_group_id").hide()
    $("#context_window_choice_group_id").hide()
    $("#rho_float_id").hide()
    $("#rho_float_choice_id").hide()
    $("#rho_space_id").hide()
    $("#rho_group_id").hide()
    $("#rho_choice_group_id").hide()
    $("#reg_float_id").hide()
    $("#reg_float_choice_id").hide()
    $("#reg_space_id").hide()
    $("#reg_group_id").hide()
    $("#reg_choice_group_id").hide()

    $("#batch_size_checkbox_id").prop("checked", false)
    $("#latent_dim_checkbox_id").prop("checked", false)
    $("#dropout_checkbox_id").prop("checked", false)
    $("#lr_checkbox_id").prop("checked", false)
    $("#anneal_cap_checkbox_id").prop("checked", false)
    $("#factors_checkbox_id").prop("checked", false)
    $("#num_ng_checkbox_id").prop("checked", false)
    $("#node_dropout_checkbox_id").prop("checked", false)
    $("#mess_dropout_checkbox_id").prop("checked", false)
    $("#reg1_checkbox_id").prop("checked", false)
    $("#reg2_checkbox_id").prop("checked", false)
    $("#num_layers_checkbox_id").prop("checked", false)
    $("#maxk_checkbox_id").prop("checked", false)
    $("#alpha_checkbox_id").prop("checked", false)
    $("#elastic_checkbox_id").prop("checked", false)
    $("#context_window_checkbox_id").prop("checked", false)
    $("#rho_checkbox_id").prop("checked", false)
    $("#reg_checkbox_id").prop("checked", false)

    $("#batch_size_int_checkbox_id").prop("checked", false)
    $("#batch_size_int_choice_checkbox_id").prop("checked", false)
    $("#latent_dim_int_checkbox_id").prop("checked", false)
    $("#latent_dim_int_choice_checkbox_id").prop("checked", false)
    $("#dropout_float_checkbox_id").prop("checked", false)
    $("#dropout_float_choice_checkbox_id").prop("checked", false)
    $("#lr_float_checkbox_id").prop("checked", false)
    $("#lr_float_choice_checkbox_id").prop("checked", false)
    $("#anneal_cap_float_checkbox_id").prop("checked", false)
    $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)
    $("#factors_int_checkbox_id").prop("checked", false)
    $("#factors_int_choice_checkbox_id").prop("checked", false)
    $("#num_ng_int_checkbox_id").prop("checked", false)
    $("#num_ng_int_choice_checkbox_id").prop("checked", false)
    $("#node_dropout_float_checkbox_id").prop("checked", false)
    $("#node_dropout_float_choice_checkbox_id").prop("checked", false)
    $("#mess_dropout_float_checkbox_id").prop("checked", false)
    $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)
    $("#reg1_float_checkbox_id").prop("checked", false)
    $("#reg1_float_choice_checkbox_id").prop("checked", false)
    $("#reg2_float_checkbox_id").prop("checked", false)
    $("#reg2_float_choice_checkbox_id").prop("checked", false)
    $("#num_layers_int_checkbox_id").prop("checked", false)
    $("#num_layers_int_choice_checkbox_id").prop("checked", false)
    $("#maxk_int_checkbox_id").prop("checked", false)
    $("#maxk_int_choice_checkbox_id").prop("checked", false)
    $("#alpha_float_checkbox_id").prop("checked", false)
    $("#alpha_float_choice_checkbox_id").prop("checked", false)
    $("#elastic_float_checkbox_id").prop("checked", false)
    $("#elastic_float_choice_checkbox_id").prop("checked", false)
    $("#context_window_int_checkbox_id").prop("checked", false)
    $("#context_window_int_choice_checkbox_id").prop("checked", false)
    $("#rho_float_checkbox_id").prop("checked", false)
    $("#rho_float_choice_checkbox_id").prop("checked", false)
    $("#reg_float_checkbox_id").prop("checked", false)
    $("#reg_float_choice_checkbox_id").prop("checked", false)

    $("#batch_size_min_warning_id").hide()
    $("#batch_size_max_warning_id").hide()
    $("#batch_size_step_warning_id").hide()
    $("#batch_size_choice_value_warning_id").hide()
    $("#latent_dim_min_warning_id").hide()
    $("#latent_dim_max_warning_id").hide()
    $("#latent_dim_step_warning_id").hide()
    $("#latent_dim_choice_value_warning_id").hide()
    $("#factors_min_warning_id").hide()
    $("#factors_max_warning_id").hide()
    $("#factors_step_warning_id").hide()
    $("#factors_choice_value_warning_id").hide()
    $("#num_ng_min_warning_id").hide()
    $("#num_ng_max_warning_id").hide()
    $("#num_ng_step_warning_id").hide()
    $("#num_ng_choice_value_warning_id").hide()
    $("#num_layers_min_warning_id").hide()
    $("#num_layers_max_warning_id").hide()
    $("#num_layers_step_warning_id").hide()
    $("#num_layers_choice_value_warning_id").hide()
    $("#maxk_min_warning_id").hide()
    $("#maxk_max_warning_id").hide()
    $("#maxk_step_warning_id").hide()
    $("#maxk_choice_value_warning_id").hide()
    $("#context_window_min_warning_id").hide()
    $("#context_window_max_warning_id").hide()
    $("#context_window_step_warning_id").hide()
    $("#context_window_choice_value_warning_id").hide()

    $("#dropout_min_warning_id").hide()
    $("#dropout_max_warning_id").hide()
    $("#dropout_step_warning_id").hide()
    $("#dropout_choice_value_warning_id").hide()
    $("#node_dropout_min_warning_id").hide()
    $("#node_dropout_max_warning_id").hide()
    $("#node_dropout_step_warning_id").hide()
    $("#node_dropout_choice_value_warning_id").hide()
    $("#mess_dropout_min_warning_id").hide()
    $("#mess_dropout_max_warning_id").hide()
    $("#mess_dropout_step_warning_id").hide()
    $("#mess_dropout_choice_value_warning_id").hide()

    $("#lr_min_warning_id").hide()
    $("#lr_max_warning_id").hide()
    $("#lr_step_warning_id").hide()
    $("#lr_choice_value_warning_id").hide()
    $("#anneal_cap_min_warning_id").hide()
    $("#anneal_cap_max_warning_id").hide()
    $("#anneal_cap_step_warning_id").hide()
    $("#anneal_cap_choice_value_warning_id").hide()
    $("#reg1_min_warning_id").hide()
    $("#reg1_max_warning_id").hide()
    $("#reg1_step_warning_id").hide()
    $("#reg1_choice_value_warning_id").hide()
    $("#reg2_min_warning_id").hide()
    $("#reg2_max_warning_id").hide()
    $("#reg2_step_warning_id").hide()
    $("#reg2_choice_value_warning_id").hide()
    $("#alpha_min_warning_id").hide()
    $("#alpha_max_warning_id").hide()
    $("#alpha_step_warning_id").hide()
    $("#alpha_choice_value_warning_id").hide()
    $("#elastic_min_warning_id").hide()
    $("#elastic_max_warning_id").hide()
    $("#elastic_step_warning_id").hide()
    $("#elastic_choice_value_warning_id").hide()
    $("#rho_min_warning_id").hide()
    $("#rho_max_warning_id").hide()
    $("#rho_step_warning_id").hide()
    $("#rho_choice_value_warning_id").hide()
    $("#reg_min_warning_id").hide()
    $("#reg_max_warning_id").hide()
    $("#reg_step_warning_id").hide()
    $("#reg_choice_value_warning_id").hide()

    $("#page-title3_id").hide()
    $("#third_card_id").hide()
    $("#copy_icon_link_id").show()
    $("#copy_complete_icon_link_id").hide()
    $("#textarea_id").attr("readonly", "readonly")
    
    // Check whether link "tune_command" has been clicked
    $("#tune_command_id").bind("click", function(){
        $("#tune_command_icon_id").css({"font-size": "20px", "font-weight": "bolder", "color": "white"})
        $("#tune_command_id").css({"font-size": "20px", "font-weight": "bolder", "color": "white"})

        $("#test_command_icon_id").css({"font-size": "20px", "font-weight": "normal", "color": "cornflowerblue"})
        $("#test_command_id").css({"font-size": "20px", "font-weight": "normal", "color": "cornflowerblue"})

        is_test_flag = false

        is_batch_size_correct_flag = true
        is_latent_dim_correct_flag = true
        is_dropout_correct_flag = true
        is_lr_correct_flag = true
        is_anneal_cap_correct_flag = true
        is_factors_correct_flag = true
        is_num_ng_correct_flag = true
        is_node_dropout_correct_flag = true
        is_mess_dropout_correct_flag = true
        is_reg1_correct_flag = true
        is_reg2_correct_flag = true
        is_num_layers_correct_flag = true
        is_maxk_correct_flag = true
        is_alpha_correct_flag = true
        is_elastic_correct_flag = true
        is_context_window_correct_flag = true
        is_rho_correct_flag = true
        is_reg_correct_flag = true

        is_batch_size_choice_flag = false
        is_latent_dim_choice_flag = false
        is_dropout_choice_flag = false
        is_lr_choice_flag = false
        is_anneal_cap_choice_flag = false
        is_factors_choice_flag = false
        is_num_ng_choice_flag = false
        is_node_dropout_choice_flag = false
        is_mess_dropout_choice_flag = false
        is_reg1_choice_flag = false
        is_reg2_choice_flag = false
        is_num_layers_choice_flag = false
        is_maxk_choice_flag = false
        is_alpha_choice_flag = false
        is_elastic_choice_flag = false
        is_context_window_choice_flag = false
        is_rho_choice_flag = false
        is_reg_choice_flag = false

        // Show & hide selectors
        $("#copy_success_alert_id").hide()
        
        $("#optimization_metric_id").show()
        $("#fold_num_id").show()
        $("#optimization_metric_selector_id").val("ndcg")
            $("#optimization_metric_selector_id").attr("Disabled", false)
        $("#algo_name_selector_id").val("multi-vae")
            $("#algo_name_selector_id").attr("Disabled", false)
            $("#alg_name_EASE").show()
            $("#alg_name_FM").show()
            $("#alg_name_NFM").show()
            $("#alg_name_NEUMF").show()
            $("#alg_name_InfAE").show()
            $("#alg_name_ItemKNN").show()
            $("#alg_name_Item2Vec").show()
            $("#alg_name_LightGCN").show()
            $("#alg_name_MF").show()
            $("#alg_name_MostPop").hide()
            $("#alg_name_Multi-VAE").show()
            $("#alg_name_NGCF").show()
            $("#alg_name_PureSVD").show()
            $("#alg_name_SLIM").show()
        $("#dataset_selector_id").val("ml-100k")
            $("#dataset_selector_id").attr("Disabled", false)
        $("#preprocess_selector_id").val("origin")
            $("#preprocess_selector_id").attr("Disabled", false)
        $("#test_method_selector_id").val("tsbr")
            $("#test_method_selector_id").attr("Disabled", false)
        $("#val_method_selector_id").val("tsbr")
            $("#val_method_selector_id").attr("Disabled", false)
        $("#sample_method_selector_id").val("");
            $("#sample_method_selector_id").attr("Disabled", "Disabled")
        $("#init_method_selector_id").val("default")
            $("#init_method_selector_id").attr("Disabled", false)
            $("#ini_method_Default").show()
            $("#ini_method_Normal").show()
            $("#ini_method_Uniform").show()
            $("#ini_method_Xavier_Normal").show()
            $("#ini_method_Xavier_Uniform").show()
        $("#optimizer_selector_id").val("default")
            $("#optimizer_selector_id").attr("Disabled", false)
        $("#early_stop_selector_id").val("True")
            $("#early_stop_selector_id").attr("Disabled", false)
        $("#loss_type_selector_id").val("")
            $("#loss_type_selector_id").attr("Disabled", "Disabled");
        
        $("#hyperopt_trail_id").show()
        $("#hyperopt_trail_input_id").val(20)
            $("#hyperopt_trail_input_id").attr("Disabled", false)
            $("#hyperopt_trail_warning_id").hide()
        $("#preprocess_number_input_id").val("")
            $("#preprocess_number_input_id").attr("Disabled", "Disabled")
            $("#preprocess_number_warning_id").hide()
        $("#test_size_input_id").val(0.2)
            $("#test_size_input_id").attr("Disabled", false)
            $("#test_size_warning_id").hide()
        $("#val_size_input_id").val(0.1)
            $("#val_size_input_id").attr("Disabled", false)
            $("#val_size_warning_id").hide()
        $("#topk_input_id").val(50)
            $("#topk_input_id").attr("Disabled", false)
            $("#topk_warning_id").hide()
        $("#fold_num_input_id").val("")
            $("#fold_num_input_id").attr("Disabled", "Disabled")
            $("#fold_num_warning_id").hide()
        $("#epoch_input_id").val(50)
            $("#epoch_input_id").attr("Disabled", false)
            $("#epoch_warning_id").hide()
        $("#cand_num_input_id").val(1000)
            $("#cand_num_input_id").attr("Disabled", false)
            $("#cand_num_warning_id").hide()
        $("#sample_ratio_input_id").val("")
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")
            $("#sample_ratio_warning_id").hide()
        $("#gpu_input_id").val("0")
            $("#gpu_input_id").attr("Disabled", false)

        $("#page-title2_id").hide()
        $("#second_card_id").hide()

        $("#batch_size_id").show()
        $("#latent_dim_id").show()
        $("#dropout_id").show()
        $("#lr_id").show()
        $("#anneal_cap_id").show()
        $("#factors_id").hide()
        $("#num_ng_id").hide()
        $("#node_dropout_id").hide()
        $("#mess_dropout_id").hide()
        $("#reg1_id").hide()
        $("#reg2_id").hide()
        $("#num_layers_id").hide()
        $("#maxk_id").hide()
        $("#alpha_id").hide()
        $("#elastic_id").hide()
        $("#context_window_id").hide()
        $("#rho_id").hide()
        $("#reg_id").hide()

        $("#batch_size_int_id").hide()
        $("#batch_size_int_choice_id").hide()
        $("#batch_size_space_id").hide()
        $("#batch_size_group_id").hide()
        $("#batch_size_choice_group_id").hide()
        $("#latent_dim_int_id").hide()
        $("#latent_dim_int_choice_id").hide()
        $("#latent_dim_space_id").hide()
        $("#latent_dim_group_id").hide()
        $("#latent_dim_choice_group_id").hide()
        $("#dropout_float_id").hide()
        $("#dropout_float_choice_id").hide()
        $("#dropout_space_id").hide()
        $("#dropout_group_id").hide()
        $("#dropout_choice_group_id").hide()
        $("#lr_float_id").hide()
        $("#lr_float_choice_id").hide()
        $("#lr_space_id").hide()
        $("#lr_group_id").hide()
        $("#lr_choice_group_id").hide()
        $("#anneal_cap_float_id").hide()
        $("#anneal_cap_float_choice_id").hide()
        $("#anneal_cap_space_id").hide()
        $("#anneal_cap_group_id").hide()
        $("#anneal_cap_choice_group_id").hide()
        $("#factors_int_id").hide()
        $("#factors_int_choice_id").hide()
        $("#factors_space_id").hide()
        $("#factors_group_id").hide()
        $("#factors_choice_group_id").hide()
        $("#num_ng_int_id").hide()
        $("#num_ng_int_choice_id").hide()
        $("#num_ng_space_id").hide()
        $("#num_ng_group_id").hide()
        $("#num_ng_choice_group_id").hide()
        $("#node_dropout_float_id").hide()
        $("#node_dropout_float_choice_id").hide()
        $("#node_dropout_space_id").hide()
        $("#node_dropout_group_id").hide()
        $("#node_dropout_choice_group_id").hide()
        $("#mess_dropout_float_id").hide()
        $("#mess_dropout_float_choice_id").hide()
        $("#mess_dropout_space_id").hide()
        $("#mess_dropout_group_id").hide()
        $("#mess_dropout_choice_group_id").hide()
        $("#reg1_float_id").hide()
        $("#reg1_float_choice_id").hide()
        $("#reg1_space_id").hide()
        $("#reg1_group_id").hide()
        $("#reg1_choice_group_id").hide()
        $("#reg2_float_id").hide()
        $("#reg2_float_choice_id").hide()
        $("#reg2_space_id").hide()
        $("#reg2_group_id").hide()
        $("#reg2_choice_group_id").hide()
        $("#num_layers_int_id").hide()
        $("#num_layers_int_choice_id").hide()
        $("#num_layers_space_id").hide()
        $("#num_layers_group_id").hide()
        $("#num_layers_choice_group_id").hide()
        $("#maxk_int_id").hide()
        $("#maxk_int_choice_id").hide()
        $("#maxk_space_id").hide()
        $("#maxk_group_id").hide()
        $("#maxk_choice_group_id").hide()
        $("#alpha_float_id").hide()
        $("#alpha_float_choice_id").hide()
        $("#alpha_space_id").hide()
        $("#alpha_group_id").hide()
        $("#alpha_choice_group_id").hide()
        $("#elastic_float_id").hide()
        $("#elastic_float_choice_id").hide()
        $("#elastic_space_id").hide()
        $("#elastic_group_id").hide()
        $("#elastic_choice_group_id").hide()
        $("#context_window_int_id").hide()
        $("#context_window_int_choice_id").hide()
        $("#context_window_space_id").hide()
        $("#context_window_group_id").hide()
        $("#context_window_choice_group_id").hide()
        $("#rho_float_id").hide()
        $("#rho_float_choice_id").hide()
        $("#rho_space_id").hide()
        $("#rho_group_id").hide()
        $("#rho_choice_group_id").hide()
        $("#reg_float_id").hide()
        $("#reg_float_choice_id").hide()
        $("#reg_space_id").hide()
        $("#reg_group_id").hide()
        $("#reg_choice_group_id").hide()

        $("#batch_size_checkbox_id").attr("Disabled", false)
        $("#latent_dim_checkbox_id").attr("Disabled", false)
        $("#dropout_checkbox_id").attr("Disabled", false)
        $("#lr_checkbox_id").attr("Disabled", false)
        $("#anneal_cap_checkbox_id").attr("Disabled", false)
        $("#factors_checkbox_id").attr("Disabled", false)
        $("#num_ng_checkbox_id").attr("Disabled", false)
        $("#node_dropout_checkbox_id").attr("Disabled", false)
        $("#mess_dropout_checkbox_id").attr("Disabled", false)
        $("#reg1_checkbox_id").attr("Disabled", false)
        $("#reg2_checkbox_id").attr("Disabled", false)
        $("#num_layers_checkbox_id").attr("Disabled", false)
        $("#maxk_checkbox_id").attr("Disabled", false)
        $("#alpha_checkbox_id").attr("Disabled", false)
        $("#elastic_checkbox_id").attr("Disabled", false)
        $("#context_window_checkbox_id").attr("Disabled", false)
        $("#rho_checkbox_id").attr("Disabled", false)
        $("#reg_checkbox_id").attr("Disabled", false)

        $("#batch_size_checkbox_id").prop("checked", false)
        $("#latent_dim_checkbox_id").prop("checked", false)
        $("#dropout_checkbox_id").prop("checked", false)
        $("#lr_checkbox_id").prop("checked", false)
        $("#anneal_cap_checkbox_id").prop("checked", false)
        $("#factors_checkbox_id").prop("checked", false)
        $("#num_ng_checkbox_id").prop("checked", false)
        $("#node_dropout_checkbox_id").prop("checked", false)
        $("#mess_dropout_checkbox_id").prop("checked", false)
        $("#reg1_checkbox_id").prop("checked", false)
        $("#reg2_checkbox_id").prop("checked", false)
        $("#num_layers_checkbox_id").prop("checked", false)
        $("#maxk_checkbox_id").prop("checked", false)
        $("#alpha_checkbox_id").prop("checked", false)
        $("#elastic_checkbox_id").prop("checked", false)
        $("#context_window_checkbox_id").prop("checked", false)
        $("#rho_checkbox_id").prop("checked", false)
        $("#reg_checkbox_id").prop("checked", false)

        $("#batch_size_int_checkbox_id").attr("Disabled", false)
        $("#batch_size_int_choice_checkbox_id").attr("Disabled", false)
        $("#latent_dim_int_checkbox_id").attr("Disabled", false)
        $("#latent_dim_int_choice_checkbox_id").attr("Disabled", false)
        $("#dropout_float_checkbox_id").attr("Disabled", false)
        $("#dropout_float_choice_checkbox_id").attr("Disabled", false)
        $("#lr_float_checkbox_id").attr("Disabled", false)
        $("#lr_float_choice_checkbox_id").attr("Disabled", false)
        $("#anneal_cap_float_checkbox_id").attr("Disabled", false)
        $("#anneal_cap_float_choice_checkbox_id").attr("Disabled", false)
        $("#factors_int_checkbox_id").attr("Disabled", false)
        $("#factors_int_choice_checkbox_id").attr("Disabled", false)
        $("#num_ng_int_checkbox_id").attr("Disabled", false)
        $("#num_ng_int_choice_checkbox_id").attr("Disabled", false)
        $("#node_dropout_float_checkbox_id").attr("Disabled", false)
        $("#node_dropout_float_choice_checkbox_id").attr("Disabled", false)
        $("#mess_dropout_float_checkbox_id").attr("Disabled", false)
        $("#mess_dropout_float_choice_checkbox_id").attr("Disabled", false)
        $("#reg1_float_checkbox_id").attr("Disabled", false)
        $("#reg1_float_choice_checkbox_id").attr("Disabled", false)
        $("#reg2_float_checkbox_id").attr("Disabled", false)
        $("#reg2_float_choice_checkbox_id").attr("Disabled", false)
        $("#num_layers_int_checkbox_id").attr("Disabled", false)
        $("#num_layers_int_choice_checkbox_id").attr("Disabled", false)
        $("#maxk_int_checkbox_id").attr("Disabled", false)
        $("#maxk_int_choice_checkbox_id").attr("Disabled", false)
        $("#alpha_float_checkbox_id").attr("Disabled", false)
        $("#alpha_float_choice_checkbox_id").attr("Disabled", false)
        $("#elastic_float_checkbox_id").attr("Disabled", false)
        $("#elastic_float_choice_checkbox_id").attr("Disabled", false)
        $("#context_window_int_checkbox_id").attr("Disabled", false)
        $("#context_window_int_choice_checkbox_id").attr("Disabled", false)
        $("#rho_float_checkbox_id").attr("Disabled", false)
        $("#rho_float_choice_checkbox_id").attr("Disabled", false)
        $("#reg_float_checkbox_id").attr("Disabled", false)
        $("#reg_float_choice_checkbox_id").attr("Disabled", false)

        $("#batch_size_int_checkbox_id").prop("checked", false)
        $("#batch_size_int_choice_checkbox_id").prop("checked", false)
        $("#latent_dim_int_checkbox_id").prop("checked", false)
        $("#latent_dim_int_choice_checkbox_id").prop("checked", false)
        $("#dropout_float_checkbox_id").prop("checked", false)
        $("#dropout_float_choice_checkbox_id").prop("checked", false)
        $("#lr_float_checkbox_id").prop("checked", false)
        $("#lr_float_choice_checkbox_id").prop("checked", false)
        $("#anneal_cap_float_checkbox_id").prop("checked", false)
        $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)
        $("#factors_int_checkbox_id").prop("checked", false)
        $("#factors_int_choice_checkbox_id").prop("checked", false)
        $("#num_ng_int_checkbox_id").prop("checked", false)
        $("#num_ng_int_choice_checkbox_id").prop("checked", false)
        $("#node_dropout_float_checkbox_id").prop("checked", false)
        $("#node_dropout_float_choice_checkbox_id").prop("checked", false)
        $("#mess_dropout_float_checkbox_id").prop("checked", false)
        $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)
        $("#reg1_float_checkbox_id").prop("checked", false)
        $("#reg1_float_choice_checkbox_id").prop("checked", false)
        $("#reg2_float_checkbox_id").prop("checked", false)
        $("#reg2_float_choice_checkbox_id").prop("checked", false)
        $("#num_layers_int_checkbox_id").prop("checked", false)
        $("#num_layers_int_choice_checkbox_id").prop("checked", false)
        $("#maxk_int_checkbox_id").prop("checked", false)
        $("#maxk_int_choice_checkbox_id").prop("checked", false)
        $("#alpha_float_checkbox_id").prop("checked", false)
        $("#alpha_float_choice_checkbox_id").prop("checked", false)
        $("#elastic_float_checkbox_id").prop("checked", false)
        $("#elastic_float_choice_checkbox_id").prop("checked", false)
        $("#context_window_int_checkbox_id").prop("checked", false)
        $("#context_window_int_choice_checkbox_id").prop("checked", false)
        $("#rho_float_checkbox_id").prop("checked", false)
        $("#rho_float_choice_checkbox_id").prop("checked", false)
        $("#reg_float_checkbox_id").prop("checked", false)
        $("#reg_float_choice_checkbox_id").prop("checked", false)

        $("#batch_size_min_input_id").attr("Disabled", false)
        $("#batch_size_max_input_id").attr("Disabled", false)
        $("#batch_size_step_input_id").attr("Disabled", false)
        $("#batch_size_choice_value_input_id").attr("Disabled", false)
        $("#latent_dim_min_input_id").attr("Disabled", false)
        $("#latent_dim_max_input_id").attr("Disabled", false)
        $("#latent_dim_step_input_id").attr("Disabled", false)
        $("#latent_dim_choice_value_input_id").attr("Disabled", false)
        $("#dropout_min_input_id").attr("Disabled", false)
        $("#dropout_max_input_id").attr("Disabled", false)
        $("#dropout_step_input_id").attr("Disabled", false)
        $("#dropout_choice_value_input_id").attr("Disabled", false)
        $("#lr_min_input_id").attr("Disabled", false)
        $("#lr_max_input_id").attr("Disabled", false)
        $("#lr_step_input_id").attr("Disabled", false)
        $("#lr_choice_value_input_id").attr("Disabled", false)
        $("#anneal_cap_min_input_id").attr("Disabled", false)
        $("#anneal_cap_max_input_id").attr("Disabled", false)
        $("#anneal_cap_step_input_id").attr("Disabled", false)
        $("#anneal_cap_choice_value_input_id").attr("Disabled", false)
        $("#factors_min_input_id").attr("Disabled", false)
        $("#factors_max_input_id").attr("Disabled", false)
        $("#factors_step_input_id").attr("Disabled", false)
        $("#factors_choice_value_input_id").attr("Disabled", false)
        $("#num_ng_min_input_id").attr("Disabled", false)
        $("#num_ng_max_input_id").attr("Disabled", false)
        $("#num_ng_step_input_id").attr("Disabled", false)
        $("#num_ng_choice_value_input_id").attr("Disabled", false)
        $("#node_dropout_min_input_id").attr("Disabled", false)
        $("#node_dropout_max_input_id").attr("Disabled", false)
        $("#node_dropout_step_input_id").attr("Disabled", false)
        $("#node_dropout_choice_value_input_id").attr("Disabled", false)
        $("#mess_dropout_min_input_id").attr("Disabled", false)
        $("#mess_dropout_max_input_id").attr("Disabled", false)
        $("#mess_dropout_step_input_id").attr("Disabled", false)
        $("#mess_dropout_choice_value_input_id").attr("Disabled", false)
        $("#reg1_min_input_id").attr("Disabled", false)
        $("#reg1_max_input_id").attr("Disabled", false)
        $("#reg1_step_input_id").attr("Disabled", false)
        $("#reg1_choice_value_input_id").attr("Disabled", false)
        $("#reg2_min_input_id").attr("Disabled", false)
        $("#reg2_max_input_id").attr("Disabled", false)
        $("#reg2_step_input_id").attr("Disabled", false)
        $("#reg2_choice_value_input_id").attr("Disabled", false)
        $("#num_layers_min_input_id").attr("Disabled", false)
        $("#num_layers_max_input_id").attr("Disabled", false)
        $("#num_layers_step_input_id").attr("Disabled", false)
        $("#num_layers_choice_value_input_id").attr("Disabled", false)
        $("#maxk_min_input_id").attr("Disabled", false)
        $("#maxk_max_input_id").attr("Disabled", false)
        $("#maxk_step_input_id").attr("Disabled", false)
        $("#maxk_choice_value_input_id").attr("Disabled", false)
        $("#alpha_min_input_id").attr("Disabled", false)
        $("#alpha_max_input_id").attr("Disabled", false)
        $("#alpha_step_input_id").attr("Disabled", false)
        $("#alpha_choice_value_input_id").attr("Disabled", false)
        $("#elastic_min_input_id").attr("Disabled", false)
        $("#elastic_max_input_id").attr("Disabled", false)
        $("#elastic_step_input_id").attr("Disabled", false)
        $("#elastic_choice_value_input_id").attr("Disabled", false)
        $("#context_window_min_input_id").attr("Disabled", false)
        $("#context_window_max_input_id").attr("Disabled", false)
        $("#context_window_step_input_id").attr("Disabled", false)
        $("#context_window_choice_value_input_id").attr("Disabled", false)
        $("#rho_min_input_id").attr("Disabled", false)
        $("#rho_max_input_id").attr("Disabled", false)
        $("#rho_step_input_id").attr("Disabled", false)
        $("#rho_choice_value_input_id").attr("Disabled", false)
        $("#reg_min_input_id").attr("Disabled", false)
        $("#reg_max_input_id").attr("Disabled", false)
        $("#reg_step_input_id").attr("Disabled", false)
        $("#reg_choice_value_input_id").attr("Disabled", false)

        $("#batch_size_min_warning_id").hide()
        $("#batch_size_max_warning_id").hide()
        $("#batch_size_step_warning_id").hide()
        $("#batch_size_choice_value_warning_id").hide()
        $("#latent_dim_min_warning_id").hide()
        $("#latent_dim_max_warning_id").hide()
        $("#latent_dim_step_warning_id").hide()
        $("#latent_dim_choice_value_warning_id").hide()
        $("#factors_min_warning_id").hide()
        $("#factors_max_warning_id").hide()
        $("#factors_step_warning_id").hide()
        $("#factors_choice_value_warning_id").hide()
        $("#num_ng_min_warning_id").hide()
        $("#num_ng_max_warning_id").hide()
        $("#num_ng_step_warning_id").hide()
        $("#num_ng_choice_value_warning_id").hide()
        $("#num_layers_min_warning_id").hide()
        $("#num_layers_max_warning_id").hide()
        $("#num_layers_step_warning_id").hide()
        $("#num_layers_choice_value_warning_id").hide()
        $("#maxk_min_warning_id").hide()
        $("#maxk_max_warning_id").hide()
        $("#maxk_step_warning_id").hide()
        $("#maxk_choice_value_warning_id").hide()
        $("#context_window_min_warning_id").hide()
        $("#context_window_max_warning_id").hide()
        $("#context_window_step_warning_id").hide()
        $("#context_window_choice_value_warning_id").hide()

        $("#dropout_min_warning_id").hide()
        $("#dropout_max_warning_id").hide()
        $("#dropout_step_warning_id").hide()
        $("#dropout_choice_value_warning_id").hide()
        $("#node_dropout_min_warning_id").hide()
        $("#node_dropout_max_warning_id").hide()
        $("#node_dropout_step_warning_id").hide()
        $("#node_dropout_choice_value_warning_id").hide()
        $("#mess_dropout_min_warning_id").hide()
        $("#mess_dropout_max_warning_id").hide()
        $("#mess_dropout_step_warning_id").hide()
        $("#mess_dropout_choice_value_warning_id").hide()

        $("#lr_min_warning_id").hide()
        $("#lr_max_warning_id").hide()
        $("#lr_step_warning_id").hide()
        $("#lr_choice_value_warning_id").hide()
        $("#anneal_cap_min_warning_id").hide()
        $("#anneal_cap_max_warning_id").hide()
        $("#anneal_cap_step_warning_id").hide()
        $("#anneal_cap_choice_value_warning_id").hide()
        $("#reg1_min_warning_id").hide()
        $("#reg1_max_warning_id").hide()
        $("#reg1_step_warning_id").hide()
        $("#reg1_choice_value_warning_id").hide()
        $("#reg2_min_warning_id").hide()
        $("#reg2_max_warning_id").hide()
        $("#reg2_step_warning_id").hide()
        $("#reg2_choice_value_warning_id").hide()
        $("#alpha_min_warning_id").hide()
        $("#alpha_max_warning_id").hide()
        $("#alpha_step_warning_id").hide()
        $("#alpha_choice_value_warning_id").hide()
        $("#elastic_min_warning_id").hide()
        $("#elastic_max_warning_id").hide()
        $("#elastic_step_warning_id").hide()
        $("#elastic_choice_value_warning_id").hide()
        $("#rho_min_warning_id").hide()
        $("#rho_max_warning_id").hide()
        $("#rho_step_warning_id").hide()
        $("#rho_choice_value_warning_id").hide()
        $("#reg_min_warning_id").hide()
        $("#reg_max_warning_id").hide()
        $("#reg_step_warning_id").hide()
        $("#reg_choice_value_warning_id").hide()

        $("#page-title3_id").hide()
        $("#third_card_id").hide()
        $("#copy_icon_link_id").hide()
        $("#copy_complete_icon_link_id").hide()
        $("#textarea_id").attr("readonly", "readonly")

        $("html, body").animate({ scrollTop: 0 }, 0)
        $("#submit-btn1_id").show()
        if ($("#submit-btn1_id").html() == "Reset") {
            $("#submit-btn1_id").html("Submit")
            $("#submit-btn1_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
        }
        if ($("#submit-btn2_id").html() == "Reset") {
            $("#submit-btn2_id").html("Submit")
            $("#submit-btn2_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
        }

        $("#textarea_id").val("")

        // Changes will happen when "Prepro" is set
        $("#preprocess_selector_id").change(function(){
            // If choose "Origin"
            if($("#preprocess_selector_id").val() == "origin") {
                // Changes in "Prepro_num" input box
                $("#preprocess_number_input_id").attr("Disabled", "Disabled")
                $("#preprocess_number_input_id").val("")
            // If choose "Core" or "Filter"
            } else if ($("#preprocess_selector_id").val() == "core" || $("#preprocess_selector_id").val() == "filter") {
                // Changes in "Prepro_num" input box
                $("#preprocess_number_input_id").attr("Disabled", false)
                $("#preprocess_number_input_id").val(5)
            }
        })
        
        /* Binding start */
        // Changes will happen when "Test_method" is set
        $("#test_method_selector_id").change(function(){
            // Get index of current selected option
            var current_test_method_index = $('#test_method_selector_id').get(0).selectedIndex
            // Bind "Test_method" and "Val_method"
            // Principle: The order & options of "Test_method" and "Val_method" are totally same.
            $("#test_method_selector_id").get(0).selectedIndex = current_test_method_index
            $("#val_method_selector_id").get(0).selectedIndex = current_test_method_index

            // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are RLOO or TLOO
            // "Test_method" and "Val_method" are always the same.
            if($("#test_method_selector_id").val() == "rloo" || $("#test_method_selector_id").val() == "tloo") {
                $("#test_size_input_id").attr("Disabled", "Disabled")
                $("#val_size_input_id").attr("Disabled", "Disabled")

                $("#test_size_input_id").val("")
                $("#val_size_input_id").val("")
            } else {
                $("#test_size_input_id").attr("Disabled", false)
                $("#val_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").val(0.2)
                $("#val_size_input_id").val(0.1)
            }
        })

        // Changes will happen when "Val_method" is set
        $("#val_method_selector_id").change(function(){
            // Get index of current selected option
            var current_val_method_index = $("#val_method_selector_id").get(0).selectedIndex
            // Bind "Test_method" and "Val_method"
            // Principle: The order & options of "Test_method" and "Val_method" are totally same.
            $("#val_method_selector_id").get(0).selectedIndex = current_val_method_index
            $("#test_method_selector_id").get(0).selectedIndex = current_val_method_index

            // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are set as RLOO or TLOO
            // "Test_method" and "Val_method" are always the same.
            if($("#val_method_selector_id").val() == "rloo" || $("#val_method_selector_id").val() == "tloo") {
                $("#val_size_input_id").attr("Disabled", "Disabled")
                $("#test_size_input_id").attr("Disabled", "Disabled")
                
                $("#val_size_input_id").val("")
                $("#test_size_input_id").val("")
            } else {
                $("#val_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").val(0.2)
                $("#val_size_input_id").val(0.1)
            }
        })
        /* Binding end */

        // Changes will happen when "Sample_method" is set
        $("#sample_method_selector_id").change(function(){
            // "Sample_ratio" cannot be editted when "Sample_method" is set as Uniform
            if($("#sample_method_selector_id").val() == "uniform") {
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")

                $("#sample_ratio_input_id").val("")
            } else {
                $("#sample_ratio_input_id").attr("Disabled", false)
                
                $("#sample_ratio_input_id").val(0.5)
            }
        })

        /* Changes in "Algo_name" */
        /* Part 1 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
            if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "ngcf" ||
                    $("#algo_name_selector_id").val() == "lightgcn"){
                // Changes in "Loss_type" selector
                $("#loss_type_selector_id").attr("Disabled", false);
                $("#loss_type_BPR").show()
                $("#loss_type_CL").show()
                $("#loss_type_HL").show()
                $("#loss_type_SL").show()
                $("#loss_type_TL").show()
                $("#loss_type_selector_id option[id='loss_type_CL']").attr("selected", "selected");
                $("#loss_type_selector_id").val("CL")
            // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
            } else if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim") {
                // Changes in "Loss_type" selector
                $("#loss_type_selector_id").attr("Disabled", "Disabled");
                $("#loss_type_selector_id").val("")
            }
        })

        /* Part 2 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "Init_method" selector and "Optimizer" selector
                $("#init_method_selector_id").attr("Disabled", "Disabled")
                $("#optimizer_selector_id").attr("Disabled", "Disabled")
                $("#init_method_selector_id").val("")
                $("#optimizer_selector_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "Init_method" selector and "Optimizer" selector
                $("#init_method_selector_id").attr("Disabled", false)
                $("#optimizer_selector_id").attr("Disabled", false)

                $("#ini_method_Default").show()
                $("#ini_method_Normal").show()
                $("#ini_method_Uniform").show()
                $("#ini_method_Xavier_Normal").show()
                $("#ini_method_Xavier_Uniform").show()

                $("#optimizer_Default").show()
                $("#optimizer_AdaGrad").show()
                $("#optimizer_Adam").show()
                $("#optimizer_RMSProp").show()
                $("#optimizer_SGD").show()
                $("#optimizer_Sparse_adam").show()

                $("#init_method_selector_id option[id='ini_method_Default']").attr("selected", "selected")
                $("#optimizer_selector_id option[id='optimizer_Default']").attr("selected", "selected")
                $("#init_method_selector_id").val("default")
                $("#optimizer_selector_id").val("default")
            }
        })

        /* Part 3 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
            if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "ngcf" ||
                    $("#algo_name_selector_id").val() == "lightgcn"){
                // Changes in "Sample_method" selector
                $("#sample_method_selector_id").attr("Disabled", false)
                $("#sam_method_Uniform").show()
                $("#sam_method_Low-Pop").show()
                $("#sam_method_High-Pop").show()
                $("#sample_method_selector_id option[id='sam_method_Uniform']").attr("selected", "selected");
                $("#sample_method_selector_id").val("uniform")
            // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
            } else if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim") {
                // Changes in "Sample_method" selector
                $("#sample_method_selector_id").attr("Disabled", "Disabled")
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")
                $("#sample_method_selector_id").val("")
                $("#sample_ratio_input_id").val("")
            }
        })

        /* Part 4 */
        // Changes will happen when "Val_method" is set
        $("#val_method_selector_id").change(function(){
            // If choose "RLOO (Random Leave-one-out)" or "RSBR (Random Split-by-ratio)"
            if ($("#val_method_selector_id").val() == "rloo" || 
                    $("#val_method_selector_id").val() == "rsbr"){
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", false)
                $("#fold_num_input_id").val(1)
            // If choose "TLOO (Time-aware Leave-one-out)" or "TSBR (Time-aware Split-by-ratio)"
            } else if ($("#val_method_selector_id").val() == "tloo" || 
                    $("#val_method_selector_id").val() == "tsbr") {
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#fold_num_input_id").val("")
            }
        })

        /* Part 5 */
        // Changes will happen when "Test_method" is set
        $("#test_method_selector_id").change(function(){
            // If choose "RLOO (Random Leave-one-out)" or "RSBR (Random Split-by-ratio)"
            if ($("#test_method_selector_id").val() == "rloo" || 
                    $("#test_method_selector_id").val() == "rsbr"){
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", false)
                $("#fold_num_input_id").val(1)
            // If choose "TLOO (Time-aware Leave-one-out)" or "TSBR (Time-aware Split-by-ratio)"
            } else if ($("#test_method_selector_id").val() == "tloo" || 
                    $("#test_method_selector_id").val() == "tsbr") {
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#fold_num_input_id").val("")
            }
        })

        /* Part 6 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "GPU" input box
                $("#gpu_input_id").attr("Disabled", "Disabled")
                $("#gpu_input_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "GPU" input box
                $("#gpu_input_id").attr("Disabled", false)
                $("#gpu_input_id").val("0")
            }
        })

        /* Part 7 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "Early_stop" selector
                $("#early_stop_selector_id").attr("Disabled", "Disabled")
                $("#early_stop_selector_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "Early_stop" selector
                $("#early_stop_selector_id").attr("Disabled", false)
                $("#early_stop_selector_id").val("True")
            }
        })
        /* Changes in "Algo_name" end */

        // Remove cursor in input box after press enter
        $(function(){
            $(document).on("keypress",function(e) {
                if(e.which == 13) {
                    $("#hyperopt_trail_input_id").blur()
                    $("#preprocess_number_input_id").blur()
                    $("#topk_input_id").blur()
                    $("#fold_num_input_id").blur()
                    $("#epoch_input_id").blur()
                    $("#test_size_input_id").blur()
                    $("#val_size_input_id").blur()
                    $("#cand_num_input_id").blur()
                    $("#gpu_input_id").blur()
                    $("#sample_ratio_input_id").blur()

                    $("#batch_size_min_input_id").blur()
                    $("#batch_size_max_input_id").blur()
                    $("#batch_size_step_input_id").blur()
                    $("#batch_size_choice_value_input_id").blur()
                    $("#latent_dim_min_input_id").blur()
                    $("#latent_dim_max_input_id").blur()
                    $("#latent_dim_step_input_id").blur()
                    $("#latent_dim_choice_value_input_id").blur()
                    $("#dropout_min_input_id").blur()
                    $("#dropout_max_input_id").blur()
                    $("#dropout_step_input_id").blur()
                    $("#dropout_choice_value_input_id").blur()
                    $("#lr_min_input_id").blur()
                    $("#lr_max_input_id").blur()
                    $("#lr_step_input_id").blur()
                    $("#lr_choice_value_input_id").blur()
                    $("#anneal_cap_min_input_id").blur()
                    $("#anneal_cap_max_input_id").blur()
                    $("#anneal_cap_step_input_id").blur()
                    $("#anneal_cap_choice_value_input_id").blur()
                    $("#factors_min_input_id").blur()
                    $("#factors_max_input_id").blur()
                    $("#factors_step_input_id").blur()
                    $("#factors_choice_value_input_id").blur()
                    $("#num_ng_min_input_id").blur()
                    $("#num_ng_max_input_id").blur()
                    $("#num_ng_step_input_id").blur()
                    $("#num_ng_choice_value_input_id").blur()
                    $("#node_dropout_min_input_id").blur()
                    $("#node_dropout_max_input_id").blur()
                    $("#node_dropout_step_input_id").blur()
                    $("#node_dropout_choice_value_input_id").blur()
                    $("#mess_dropout_min_input_id").blur()
                    $("#mess_dropout_max_input_id").blur()
                    $("#mess_dropout_step_input_id").blur()
                    $("#mess_dropout_choice_value_input_id").blur()
                    $("#reg1_min_input_id").blur()
                    $("#reg1_max_input_id").blur()
                    $("#reg1_step_input_id").blur()
                    $("#reg1_choice_value_input_id").blur()
                    $("#reg2_min_input_id").blur()
                    $("#reg2_max_input_id").blur()
                    $("#reg2_step_input_id").blur()
                    $("#reg2_choice_value_input_id").blur()
                    $("#num_layers_min_input_id").blur()
                    $("#num_layers_max_input_id").blur()
                    $("#num_layers_step_input_id").blur()
                    $("#num_layers_choice_value_input_id").blur()
                    $("#maxk_min_input_id").blur()
                    $("#maxk_max_input_id").blur()
                    $("#maxk_step_input_id").blur()
                    $("#maxk_choice_value_input_id").blur()
                    $("#alpha_min_input_id").blur()
                    $("#alpha_max_input_id").blur()
                    $("#alpha_step_input_id").blur()
                    $("#alpha_choice_value_input_id").blur()
                    $("#elastic_min_input_id").blur()
                    $("#elastic_max_input_id").blur()
                    $("#elastic_step_input_id").blur()
                    $("#elastic_choice_value_input_id").blur()
                    $("#context_window_min_input_id").blur()
                    $("#context_window_max_input_id").blur()
                    $("#context_window_step_input_id").blur()
                    $("#context_window_choice_value_input_id").blur()
                    $("#rho_min_input_id").blur()
                    $("#rho_max_input_id").blur()
                    $("#rho_step_input_id").blur()
                    $("#rho_choice_value_input_id").blur()
                    $("#reg_min_input_id").blur()
                    $("#reg_max_input_id").blur()
                    $("#reg_step_input_id").blur()
                    $("#reg_choice_value_input_id").blur()
                }
            })
        })

        // Check whether the input item is numeric or a number or an integer
        $("#hyperopt_trail_input_id").change(function(){
            var val_hyperopt_trail = $("#hyperopt_trail_input_id").val()
            test_val_hyperopt_trail = Number(val_hyperopt_trail)
            if (!Number.isInteger(test_val_hyperopt_trail)) {
                $("#hyperopt_trail_input_id").val(val_hyperopt_trail)
                $("#hyperopt_trail_warning_id").show()
            } else {
                $("#hyperopt_trail_input_id").val(Number(val_hyperopt_trail))
                $("#hyperopt_trail_warning_id").hide()
            }

            // Set input range for "HyperOPT_trail"
            // The value should be an integer larger than 0
            if ($("#hyperopt_trail_input_id").val() < 1) {
                $("#hyperopt_trail_input_id").val(1)
                $("#hyperopt_trail_warning_id").show()
            }
        })

        $("#preprocess_number_input_id").change(function(){
            var val_prepro_number = $("#preprocess_number_input_id").val()
            test_val_prepro_number = Number(val_prepro_number)
            if (!Number.isInteger(test_val_prepro_number) && $("#preprocess_selector_id").val() !== "origin") {
                $("#preprocess_number_input_id").val(val_prepro_number)
                $("#preprocess_number_warning_id").show()
            } else {
                $("#preprocess_number_input_id").val(Number(val_prepro_number))
                $("#preprocess_number_warning_id").hide()
            }

            // Set input range for "Prepro_number"
            // The value should be an integer larger than 0
            if ($("#preprocess_number_input_id").val() < 1) {
                $("#preprocess_number_input_id").val(1)
                $("#preprocess_number_warning_id").show()
            }
        })

        $("#topk_input_id").change(function(){
            var val_topk = $("#topk_input_id").val()
            test_val_topk = Number(val_topk)
            if (!Number.isInteger(test_val_topk)) {
                $("#topk_input_id").val(val_topk)
                $("#topk_warning_id").show()
            } else {
                $("#topk_input_id").val(Number(val_topk))
                $("#topk_warning_id").hide()
            }

            // Set input range for "Top-K"
            // The value should be an integer larger than 0
            if ($("#topk_input_id").val() < 1) {
                $("#topk_input_id").val(1)
                $("#topk_warning_id").show()
            }
        })

        $("#fold_num_input_id").change(function(){
            var val_fold_num = $("#fold_num_input_id").val()
            test_val_fold_num = Number(val_fold_num)
            if (!Number.isInteger(test_val_fold_num)) {
                $("#fold_num_input_id").val(val_fold_num)
                $("#fold_num_warning_id").show()
            } else {
                $("#fold_num_input_id").val(Number(val_fold_num))
                $("#fold_num_warning_id").hide()
            }

            // Set input range for "Fold_num"
            // The value should be an integer larger than 0
            if ($("#fold_num_input_id").val() < 1) {
                $("#fold_num_input_id").val(1)
                $("#fold_num_warning_id").show()
            }
        })

        $("#epoch_input_id").change(function(){
            var val_epoch = $("#epoch_input_id").val()
            test_val_epoch = Number(val_epoch)
            if (!Number.isInteger(test_val_epoch)) {
                $("#epoch_input_id").val(val_epoch)
                $("#epoch_warning_id").show()
            } else {
                $("#epoch_input_id").val(Number(val_epoch))
                $("#epoch_warning_id").hide()
            }

            // Set input range for "Epoch"
            // The value should be an integer larger than 0
            if ($("#epoch_input_id").val() < 1) {
                $("#epoch_input_id").val(1)
                $("#epoch_warning_id").show()
            }
        })
        
        $("#test_size_input_id").change(function(){
            var val_test_size = $("#test_size_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_test_size) && ($("#test_method_selector_id").val() !== "rloo" || $("#test_method_selector_id").val() !== "tloo")) {
                $("#test_size_input_id").val(val_test_size)
                $("#test_size_warning_id").show()
            } else {
                $("#test_size_input_id").val(Number(val_test_size))
                $("#test_size_warning_id").hide()
            }

            // Set input range for "Test_size"
            // The ratio range is [0, 1]
            if ($("#test_size_input_id").val() > 1) {
                $("#test_size_input_id").val(1)
                $("#test_size_warning_id").show()
            } else if ($("#test_size_input_id").val() < 0) {
                $("#test_size_input_id").val(0)
                $("#test_size_warning_id").show()
            }
        })

        $("#val_size_input_id").change(function(){
            var val_val_size = $("#val_size_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_val_size) && ($("#val_method_selector_id").val() !== "rloo" || $("#val_method_selector_id").val() !== "tloo")) {
                $("#val_size_input_id").val(val_val_size)
                $("#val_size_warning_id").show()
            } else {
                $("#val_size_input_id").val(Number(val_val_size))
                $("#val_size_warning_id").hide()
            }

            // Set input range for "Val_size"
            // The ratio range is [0, 1]
            if ($("#val_size_input_id").val() > 1) {
                $("#val_size_input_id").val("1")
                $("#val_size_warning_id").show()
            } else if ($("#val_size_input_id").val() < 0) {
                $("#val_size_input_id").val("0")
                $("#val_size_warning_id").show()
            }
        })

        $("#cand_num_input_id").change(function(){
            var val_cand_num = $("#cand_num_input_id").val()
            test_val_cand_num = Number(val_cand_num)
            if (!Number.isInteger(test_val_cand_num)) {
                $("#cand_num_input_id").val(val_cand_num)
                $("#cand_num_warning_id").show()
            } else {
                $("#cand_num_input_id").val(Number(val_cand_num))
                $("#cand_num_warning_id").hide()
            }

            // Set input range for "Cand_num"
            // The value should be an integer larger than 999
            if ($("#cand_num_input_id").val() < 1000) {
                $("#cand_num_input_id").val(1000)
                $("#cand_num_warning_id").show()
            }
        })
        
        $("#gpu_input_id").change(function(){
            $("#gpu_input_id").val()
        })

        $("#sample_ratio_input_id").change(function(){
            var val_sample_ratio = $("#sample_ratio_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_sample_ratio) && $("#sample_method_selector_id").val != "uniform") {
                $("#sample_ratio_input_id").val(val_sample_ratio)
                $("#sample_ratio_warning_id").show()
            } else {
                $("#sample_ratio_input_id").val(Number(val_sample_ratio))
                $("#sample_ratio_warning_id").hide()
            }

            // Set input range for "Sample_ratio"
            // The ratio range is [0, 1]
            if ($("#sample_ratio_input_id").val() > 1) {
                $("#sample_ratio_input_id").val(1)
                $("#sample_ratio_warning_id").show()
            } else if ($("#sample_ratio_input_id").val() < 0) {
                $("#sample_ratio_input_id").val(0)
                $("#sample_ratio_warning_id").show()
            }
        })

        // Algorithm Specific Settings Part
        // Algo-setting initialization
        if (!is_test_flag) {
            // batch_size
            $("#batch_size_checkbox_id").change(function() {
                if ($("#batch_size_checkbox_id")[0].checked) {
                    $("#batch_size_int_id").show()
                    $("#batch_size_int_choice_id").show()

                    $("#batch_size_int_checkbox_id").prop("checked", true)
                    $("#batch_size_int_choice_checkbox_id").prop("checked", false)

                    $("#batch_size_space_id").show()
                    $("#batch_size_group_id").show()
                    $("#batch_size_choice_group_id").hide()
        
                    $("#batch_size_tune1_id").show()
                    $("#batch_size_tune2_id").show()
                    $("#batch_size_tune3_id").show()
                    $("#batch_size_test_id").hide()
        
                    $("#batch_size_min_input_id").val(128)
                    $("#batch_size_max_input_id").val(512)
                    $("#batch_size_step_input_id").val("")
        
                    $("#batch_size_min_warning_id").hide()
                    $("#batch_size_max_warning_id").hide()
                    $("#batch_size_step_warning_id").hide()
                } else {
                    $("#batch_size_int_id").hide()
                    $("#batch_size_int_choice_id").hide()

                    $("#batch_size_int_checkbox_id").prop("checked", false)
                    $("#batch_size_int_choice_checkbox_id").prop("checked", false)

                    $("#batch_size_space_id").hide()
                    $("#batch_size_group_id").hide()
                    $("#batch_size_choice_group_id").hide()
                }
            })

            $("#batch_size_int_checkbox_id").change(function() {
                if ($("#batch_size_int_checkbox_id")[0].checked) {
                    is_batch_size_choice_flag = false
                    $("#batch_size_int_choice_checkbox_id").prop("checked", false)
        
                    $("#batch_size_space_id").show()
                    $("#batch_size_group_id").show()
                    $("#batch_size_choice_group_id").hide()
        
                    $("#batch_size_tune1_id").show()
                    $("#batch_size_tune2_id").show()
                    $("#batch_size_tune3_id").show()
                    $("#batch_size_test_id").hide()
        
                    $("#batch_size_min_input_id").val(128)
                    $("#batch_size_max_input_id").val(512)
                    $("#batch_size_step_input_id").val("")
        
                    $("#batch_size_min_warning_id").hide()
                    $("#batch_size_max_warning_id").hide()
                    $("#batch_size_step_warning_id").hide()
                }
            })

            $("#batch_size_int_choice_checkbox_id").change(function() {
                if ($("#batch_size_int_choice_checkbox_id")[0].checked) {
                    is_batch_size_choice_flag = true
                    $("#batch_size_int_checkbox_id").prop("checked", false)
        
                    $("#batch_size_space_id").show()
                    $("#batch_size_group_id").hide()
                    $("#batch_size_choice_group_id").show()
        
                    $("#batch_size_tune1_id").hide()
                    $("#batch_size_tune2_id").hide()
                    $("#batch_size_tune3_id").hide()
                    $("#batch_size_test_id").hide()
        
                    $("#batch_size_choice_value_input_id").val("128, 256, 512")
        
                    $("#batch_size_choice_value_warning_id").hide()
                }
            })

            // latent_dim
            $("#latent_dim_checkbox_id").change(function() {
                if ($("#latent_dim_checkbox_id")[0].checked) {
                    $("#latent_dim_int_id").show()
                    $("#latent_dim_int_choice_id").show()

                    $("#latent_dim_int_checkbox_id").prop("checked", true)
                    $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                    $("#latent_dim_space_id").show()
                    $("#latent_dim_group_id").show()
                    $("#latent_dim_choice_group_id").hide()

                    $("#latent_dim_tune1_id").show()
                    $("#latent_dim_tune2_id").show()
                    $("#latent_dim_tune3_id").show()
                    $("#latent_dim_test_id").hide()

                    $("#latent_dim_min_input_id").val(64)
                    $("#latent_dim_max_input_id").val(256)
                    $("#latent_dim_step_input_id").val("")

                    $("#latent_dim_min_warning_id").hide()
                    $("#latent_dim_max_warning_id").hide()
                    $("#latent_dim_step_warning_id").hide()
                } else {
                    $("#latent_dim_int_id").hide()
                    $("#latent_dim_int_choice_id").hide()

                    $("#latent_dim_int_checkbox_id").prop("checked", false)
                    $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                    $("#latent_dim_space_id").hide()
                    $("#latent_dim_group_id").hide()
                    $("#latent_dim_choice_group_id").hide()
                }
            })

            $("#latent_dim_int_checkbox_id").change(function() {
                if ($("#latent_dim_int_checkbox_id")[0].checked) {
                    is_latent_dim_choice_flag = false
                    $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                    $("#latent_dim_space_id").show()
                    $("#latent_dim_group_id").show()
                    $("#latent_dim_choice_group_id").hide()

                    $("#latent_dim_tune1_id").show()
                    $("#latent_dim_tune2_id").show()
                    $("#latent_dim_tune3_id").show()
                    $("#latent_dim_test_id").hide()

                    $("#latent_dim_min_input_id").val(64)
                    $("#latent_dim_max_input_id").val(256)
                    $("#latent_dim_step_input_id").val("")

                    $("#latent_dim_min_warning_id").hide()
                    $("#latent_dim_max_warning_id").hide()
                    $("#latent_dim_step_warning_id").hide()
                }
            })

            $("#latent_dim_int_choice_checkbox_id").change(function() {
                if ($("#latent_dim_int_choice_checkbox_id")[0].checked) {
                    is_latent_dim_choice_flag = true
                    $("#latent_dim_int_checkbox_id").prop("checked", false)

                    $("#latent_dim_space_id").show()
                    $("#latent_dim_group_id").hide()
                    $("#latent_dim_choice_group_id").show()

                    $("#latent_dim_tune1_id").hide()
                    $("#latent_dim_tune2_id").hide()
                    $("#latent_dim_tune3_id").hide()
                    $("#latent_dim_test_id").hide()

                    $("#latent_dim_choice_value_input_id").val("64, 160, 256")

                    $("#latent_dim_choice_value_warning_id").hide()
                }
            })

            // dropout
            $("#dropout_checkbox_id").change(function() {
                if ($("#dropout_checkbox_id")[0].checked) {
                    $("#dropout_float_id").show()
                    $("#dropout_float_choice_id").show()

                    $("#dropout_float_checkbox_id").prop("checked", true)
                    $("#dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#dropout_space_id").show()
                    $("#dropout_group_id").show()
                    $("#dropout_choice_group_id").hide()

                    $("#dropout_tune1_id").show()
                    $("#dropout_tune2_id").show()
                    $("#dropout_tune3_id").show()
                    $("#dropout_test_id").hide()

                    $("#dropout_min_input_id").val(0.1)
                    $("#dropout_max_input_id").val(0.9)
                    $("#dropout_step_input_id").val("")

                    $("#dropout_min_warning_id").hide()
                    $("#dropout_max_warning_id").hide()
                    $("#dropout_step_warning_id").hide()
                } else {
                    $("#dropout_float_id").hide()
                    $("#dropout_float_choice_id").hide()

                    $("#dropout_float_checkbox_id").prop("checked", false)
                    $("#dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#dropout_space_id").hide()
                    $("#dropout_group_id").hide()
                    $("#dropout_choice_group_id").hide()
                }
            })

            $("#dropout_float_checkbox_id").change(function() {
                if ($("#dropout_float_checkbox_id")[0].checked) {
                    is_dropout_choice_flag = false
                    $("#dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#dropout_space_id").show()
                    $("#dropout_group_id").show()
                    $("#dropout_choice_group_id").hide()

                    $("#dropout_tune1_id").show()
                    $("#dropout_tune2_id").show()
                    $("#dropout_tune3_id").show()
                    $("#dropout_test_id").hide()

                    $("#dropout_min_input_id").val(0.1)
                    $("#dropout_max_input_id").val(0.9)
                    $("#dropout_step_input_id").val("")

                    $("#dropout_min_warning_id").hide()
                    $("#dropout_max_warning_id").hide()
                    $("#dropout_step_warning_id").hide()
                }
            })

            $("#dropout_float_choice_checkbox_id").change(function() {
                if ($("#dropout_float_choice_checkbox_id")[0].checked) {
                    is_dropout_choice_flag = true
                    $("#dropout_float_checkbox_id").prop("checked", false)

                    $("#dropout_space_id").show()
                    $("#dropout_group_id").hide()
                    $("#dropout_choice_group_id").show()

                    $("#dropout_tune1_id").hide()
                    $("#dropout_tune2_id").hide()
                    $("#dropout_tune3_id").hide()
                    $("#dropout_test_id").hide()

                    $("#dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                    $("#dropout_choice_value_warning_id").hide()
                }
            })

            // lr
            $("#lr_checkbox_id").change(function() {
                if ($("#lr_checkbox_id")[0].checked) {
                    $("#lr_float_id").show()
                    $("#lr_float_choice_id").show()

                    $("#lr_float_checkbox_id").prop("checked", true)
                    $("#lr_float_choice_checkbox_id").prop("checked", false)

                    $("#lr_space_id").show()
                    $("#lr_group_id").show()
                    $("#lr_choice_group_id").hide()

                    $("#lr_tune1_id").show()
                    $("#lr_tune2_id").show()
                    $("#lr_tune3_id").show()
                    $("#lr_test_id").hide()

                    $("#lr_min_input_id").val(0.001)
                    $("#lr_max_input_id").val(0.01)
                    $("#lr_step_input_id").val("")

                    $("#lr_min_warning_id").hide()
                    $("#lr_max_warning_id").hide()
                    $("#lr_step_warning_id").hide()
                } else {
                    $("#lr_float_id").hide()
                    $("#lr_float_choice_id").hide()

                    $("#lr_float_checkbox_id").prop("checked", false)
                    $("#lr_float_choice_checkbox_id").prop("checked", false)

                    $("#lr_space_id").hide()
                    $("#lr_group_id").hide()
                    $("#lr_choice_group_id").hide()
                }
            })

            $("#lr_float_checkbox_id").change(function() {
                if ($("#lr_float_checkbox_id")[0].checked) {
                    is_lr_choice_flag = false
                    $("#lr_float_choice_checkbox_id").prop("checked", false)

                    $("#lr_space_id").show()
                    $("#lr_group_id").show()
                    $("#lr_choice_group_id").hide()

                    $("#lr_tune1_id").show()
                    $("#lr_tune2_id").show()
                    $("#lr_tune3_id").show()
                    $("#lr_test_id").hide()

                    $("#lr_min_input_id").val(0.001)
                    $("#lr_max_input_id").val(0.01)
                    $("#lr_step_input_id").val("")

                    $("#lr_min_warning_id").hide()
                    $("#lr_max_warning_id").hide()
                    $("#lr_step_warning_id").hide()
                }
            })

            $("#lr_float_choice_checkbox_id").change(function() {
                if ($("#lr_float_choice_checkbox_id")[0].checked) {
                    is_lr_choice_flag = true
                    $("#lr_float_checkbox_id").prop("checked", false)

                    $("#lr_space_id").show()
                    $("#lr_group_id").hide()
                    $("#lr_choice_group_id").show()

                    $("#lr_tune1_id").hide()
                    $("#lr_tune2_id").hide()
                    $("#lr_tune3_id").hide()
                    $("#lr_test_id").hide()

                    $("#lr_choice_value_input_id").val("0.001, 0.005, 0.01")

                    $("#lr_choice_value_warning_id").hide()
                }
            })

            // anneal_cap
            $("#anneal_cap_checkbox_id").change(function() {
                if ($("#anneal_cap_checkbox_id")[0].checked) {
                    $("#anneal_cap_float_id").show()
                    $("#anneal_cap_float_choice_id").show()

                    $("#anneal_cap_float_checkbox_id").prop("checked", true)
                    $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                    $("#anneal_cap_space_id").show()
                    $("#anneal_cap_group_id").show()
                    $("#anneal_cap_choice_group_id").hide()

                    $("#anneal_cap_tune1_id").show()
                    $("#anneal_cap_tune2_id").show()
                    $("#anneal_cap_tune3_id").show()
                    $("#anneal_cap_test_id").hide()

                    $("#anneal_cap_min_input_id").val(0.1)
                    $("#anneal_cap_max_input_id").val(1)
                    $("#anneal_cap_step_input_id").val("")

                    $("#anneal_cap_min_warning_id").hide()
                    $("#anneal_cap_max_warning_id").hide()
                    $("#anneal_cap_step_warning_id").hide()
                } else {
                    $("#anneal_cap_float_id").hide()
                    $("#anneal_cap_float_choice_id").hide()

                    $("#anneal_cap_float_checkbox_id").prop("checked", false)
                    $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                    $("#anneal_cap_space_id").hide()
                    $("#anneal_cap_group_id").hide()
                    $("#anneal_cap_choice_group_id").hide()
                }
            })

            $("#anneal_cap_float_checkbox_id").change(function() {
                if ($("#anneal_cap_float_checkbox_id")[0].checked) {
                    is_anneal_cap_choice_flag = false
                    $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                    $("#anneal_cap_space_id").show()
                    $("#anneal_cap_group_id").show()
                    $("#anneal_cap_choice_group_id").hide()

                    $("#anneal_cap_tune1_id").show()
                    $("#anneal_cap_tune2_id").show()
                    $("#anneal_cap_tune3_id").show()
                    $("#anneal_cap_test_id").hide()

                    $("#anneal_cap_min_input_id").val(0.1)
                    $("#anneal_cap_max_input_id").val(1)
                    $("#anneal_cap_step_input_id").val("")

                    $("#anneal_cap_min_warning_id").hide()
                    $("#anneal_cap_max_warning_id").hide()
                    $("#anneal_cap_step_warning_id").hide()
                }
            })

            $("#anneal_cap_float_choice_checkbox_id").change(function() {
                if ($("#anneal_cap_float_choice_checkbox_id")[0].checked) {
                    is_anneal_cap_choice_flag = true
                    $("#anneal_cap_float_checkbox_id").prop("checked", false)

                    $("#anneal_cap_space_id").show()
                    $("#anneal_cap_group_id").hide()
                    $("#anneal_cap_choice_group_id").show()

                    $("#anneal_cap_tune1_id").hide()
                    $("#anneal_cap_tune2_id").hide()
                    $("#anneal_cap_tune3_id").hide()
                    $("#anneal_cap_test_id").hide()

                    $("#anneal_cap_choice_value_input_id").val("0.1, 0.5, 1")

                    $("#anneal_cap_choice_value_warning_id").hide()
                }
            })

            // factors
            $("#factors_checkbox_id").change(function() {
                if ($("#factors_checkbox_id")[0].checked) {
                    $("#factors_int_id").show()
                    $("#factors_int_choice_id").show()

                    $("#factors_int_checkbox_id").prop("checked", true)
                    $("#factors_int_choice_checkbox_id").prop("checked", false)

                    $("#factors_space_id").show()
                    $("#factors_group_id").show()
                    $("#factors_choice_group_id").hide()

                    $("#factors_tune1_id").show()
                    $("#factors_tune2_id").show()
                    $("#factors_tune3_id").show()
                    $("#factors_test_id").hide()

                    $("#factors_min_input_id").val(20)
                    $("#factors_max_input_id").val(100)
                    $("#factors_step_input_id").val("")

                    $("#factors_min_warning_id").hide()
                    $("#factors_max_warning_id").hide()
                    $("#factors_step_warning_id").hide()
                } else {
                    $("#factors_int_id").hide()
                    $("#factors_int_choice_id").hide()

                    $("#factors_int_checkbox_id").prop("checked", false)
                    $("#factors_int_choice_checkbox_id").prop("checked", false)

                    $("#factors_space_id").hide()
                    $("#factors_group_id").hide()
                    $("#factors_choice_group_id").hide()
                }
            })

            $("#factors_int_checkbox_id").change(function() {
                if ($("#factors_int_checkbox_id")[0].checked) {
                    is_factors_choice_flag = false
                    $("#factors_int_choice_checkbox_id").prop("checked", false)

                    $("#factors_space_id").show()
                    $("#factors_group_id").show()
                    $("#factors_choice_group_id").hide()

                    $("#factors_tune1_id").show()
                    $("#factors_tune2_id").show()
                    $("#factors_tune3_id").show()
                    $("#factors_test_id").hide()

                    $("#factors_min_input_id").val(20)
                    $("#factors_max_input_id").val(100)
                    $("#factors_step_input_id").val("")

                    $("#factors_min_warning_id").hide()
                    $("#factors_max_warning_id").hide()
                    $("#factors_step_warning_id").hide()
                }
            })

            $("#factors_int_choice_checkbox_id").change(function() {
                if ($("#factors_int_choice_checkbox_id")[0].checked) {
                    is_factors_choice_flag = true
                    $("#factors_int_checkbox_id").prop("checked", false)

                    $("#factors_space_id").show()
                    $("#factors_group_id").hide()
                    $("#factors_choice_group_id").show()

                    $("#factors_tune1_id").hide()
                    $("#factors_tune2_id").hide()
                    $("#factors_tune3_id").hide()
                    $("#factors_test_id").hide()

                    $("#factors_choice_value_input_id").val("20, 60, 100")

                    $("#factors_choice_value_warning_id").hide()
                }
            })

            // num_ng
            $("#num_ng_checkbox_id").change(function() {
                if ($("#num_ng_checkbox_id")[0].checked) {
                    $("#num_ng_int_id").show()
                    $("#num_ng_int_choice_id").show()

                    $("#num_ng_int_checkbox_id").prop("checked", true)
                    $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                    $("#num_ng_space_id").show()
                    $("#num_ng_group_id").show()
                    $("#num_ng_choice_group_id").hide()

                    $("#num_ng_tune1_id").show()
                    $("#num_ng_tune2_id").show()
                    $("#num_ng_tune3_id").show()
                    $("#num_ng_test_id").hide()

                    $("#num_ng_min_input_id").val(1)
                    $("#num_ng_max_input_id").val(4)
                    $("#num_ng_step_input_id").val("")

                    $("#num_ng_min_warning_id").hide()
                    $("#num_ng_max_warning_id").hide()
                    $("#num_ng_step_warning_id").hide()
                } else {
                    $("#num_ng_int_id").hide()
                    $("#num_ng_int_choice_id").hide()

                    $("#num_ng_int_checkbox_id").prop("checked", false)
                    $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                    $("#num_ng_space_id").hide()
                    $("#num_ng_group_id").hide()
                    $("#num_ng_choice_group_id").hide()
                }
            })

            $("#num_ng_int_checkbox_id").change(function() {
                if ($("#num_ng_int_checkbox_id")[0].checked) {
                    is_num_ng_choice_flag = false
                    $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                    $("#num_ng_space_id").show()
                    $("#num_ng_group_id").show()
                    $("#num_ng_choice_group_id").hide()

                    $("#num_ng_tune1_id").show()
                    $("#num_ng_tune2_id").show()
                    $("#num_ng_tune3_id").show()
                    $("#num_ng_test_id").hide()

                    $("#num_ng_min_input_id").val(1)
                    $("#num_ng_max_input_id").val(4)
                    $("#num_ng_step_input_id").val("")

                    $("#num_ng_min_warning_id").hide()
                    $("#num_ng_max_warning_id").hide()
                    $("#num_ng_step_warning_id").hide()
                }
            })

            $("#num_ng_int_choice_checkbox_id").change(function() {
                if ($("#num_ng_int_choice_checkbox_id")[0].checked) {
                    is_num_ng_choice_flag = true
                    $("#num_ng_int_checkbox_id").prop("checked", false)

                    $("#num_ng_space_id").show()
                    $("#num_ng_group_id").hide()
                    $("#num_ng_choice_group_id").show()

                    $("#num_ng_tune1_id").hide()
                    $("#num_ng_tune2_id").hide()
                    $("#num_ng_tune3_id").hide()
                    $("#num_ng_test_id").hide()

                    $("#num_ng_choice_value_input_id").val("1, 3, 4")

                    $("#num_ng_choice_value_warning_id").hide()
                }
            })

            // node_dropout
            $("#node_dropout_checkbox_id").change(function() {
                if ($("#node_dropout_checkbox_id")[0].checked) {
                    $("#node_dropout_float_id").show()
                    $("#node_dropout_float_choice_id").show()

                    $("#node_dropout_float_checkbox_id").prop("checked", true)
                    $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#node_dropout_space_id").show()
                    $("#node_dropout_group_id").show()
                    $("#node_dropout_choice_group_id").hide()

                    $("#node_dropout_tune1_id").show()
                    $("#node_dropout_tune2_id").show()
                    $("#node_dropout_tune3_id").show()
                    $("#node_dropout_test_id").hide()

                    $("#node_dropout_min_input_id").val(0.1)
                    $("#node_dropout_max_input_id").val(0.9)
                    $("#node_dropout_step_input_id").val("")

                    $("#node_dropout_min_warning_id").hide()
                    $("#node_dropout_max_warning_id").hide()
                    $("#node_dropout_step_warning_id").hide()
                } else {
                    $("#node_dropout_float_id").hide()
                    $("#node_dropout_float_choice_id").hide()

                    $("#node_dropout_float_checkbox_id").prop("checked", false)
                    $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#node_dropout_space_id").hide()
                    $("#node_dropout_group_id").hide()
                    $("#node_dropout_choice_group_id").hide()
                }
            })

            $("#node_dropout_float_checkbox_id").change(function() {
                if ($("#node_dropout_float_checkbox_id")[0].checked) {
                    is_node_dropout_choice_flag = false
                    $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#node_dropout_space_id").show()
                    $("#node_dropout_group_id").show()
                    $("#node_dropout_choice_group_id").hide()

                    $("#node_dropout_tune1_id").show()
                    $("#node_dropout_tune2_id").show()
                    $("#node_dropout_tune3_id").show()
                    $("#node_dropout_test_id").hide()

                    $("#node_dropout_min_input_id").val(0.1)
                    $("#node_dropout_max_input_id").val(0.9)
                    $("#node_dropout_step_input_id").val("")

                    $("#node_dropout_min_warning_id").hide()
                    $("#node_dropout_max_warning_id").hide()
                    $("#node_dropout_step_warning_id").hide()
                }
            })

            $("#node_dropout_float_choice_checkbox_id").change(function() {
                if ($("#node_dropout_float_choice_checkbox_id")[0].checked) {
                    is_node_dropout_choice_flag = true
                    $("#node_dropout_float_checkbox_id").prop("checked", false)

                    $("#node_dropout_space_id").show()
                    $("#node_dropout_group_id").hide()
                    $("#node_dropout_choice_group_id").show()

                    $("#node_dropout_tune1_id").hide()
                    $("#node_dropout_tune2_id").hide()
                    $("#node_dropout_tune3_id").hide()
                    $("#node_dropout_test_id").hide()

                    $("#node_dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                    $("#node_dropout_choice_value_warning_id").hide()
                }
            })

            // mess_dropout
            $("#mess_dropout_checkbox_id").change(function() {
                if ($("#mess_dropout_checkbox_id")[0].checked) {
                    $("#mess_dropout_float_id").show()
                    $("#mess_dropout_float_choice_id").show()

                    $("#mess_dropout_float_checkbox_id").prop("checked", true)
                    $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#mess_dropout_space_id").show()
                    $("#mess_dropout_group_id").show()
                    $("#mess_dropout_choice_group_id").hide()

                    $("#mess_dropout_tune1_id").show()
                    $("#mess_dropout_tune2_id").show()
                    $("#mess_dropout_tune3_id").show()
                    $("#mess_dropout_test_id").hide()

                    $("#mess_dropout_min_input_id").val(0.1)
                    $("#mess_dropout_max_input_id").val(0.9)
                    $("#mess_dropout_step_input_id").val("")

                    $("#mess_dropout_min_warning_id").hide()
                    $("#mess_dropout_max_warning_id").hide()
                    $("#mess_dropout_step_warning_id").hide()
                } else {
                    $("#mess_dropout_float_id").hide()
                    $("#mess_dropout_float_choice_id").hide()

                    $("#mess_dropout_float_checkbox_id").prop("checked", false)
                    $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#mess_dropout_space_id").hide()
                    $("#mess_dropout_group_id").hide()
                    $("#mess_dropout_choice_group_id").hide()
                }
            })

            $("#mess_dropout_float_checkbox_id").change(function() {
                if ($("#mess_dropout_float_checkbox_id")[0].checked) {
                    is_mess_dropout_choice_flag = false
                    $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                    $("#mess_dropout_space_id").show()
                    $("#mess_dropout_group_id").show()
                    $("#mess_dropout_choice_group_id").hide()

                    $("#mess_dropout_tune1_id").show()
                    $("#mess_dropout_tune2_id").show()
                    $("#mess_dropout_tune3_id").show()
                    $("#mess_dropout_test_id").hide()

                    $("#mess_dropout_min_input_id").val(0.1)
                    $("#mess_dropout_max_input_id").val(0.9)
                    $("#mess_dropout_step_input_id").val("")

                    $("#mess_dropout_min_warning_id").hide()
                    $("#mess_dropout_max_warning_id").hide()
                    $("#mess_dropout_step_warning_id").hide()
                }
            })

            $("#mess_dropout_float_choice_checkbox_id").change(function() {
                if ($("#mess_dropout_float_choice_checkbox_id")[0].checked) {
                    is_mess_dropout_choice_flag = true
                    $("#mess_dropout_float_checkbox_id").prop("checked", false)

                    $("#mess_dropout_space_id").show()
                    $("#mess_dropout_group_id").hide()
                    $("#mess_dropout_choice_group_id").show()

                    $("#mess_dropout_tune1_id").hide()
                    $("#mess_dropout_tune2_id").hide()
                    $("#mess_dropout_tune3_id").hide()
                    $("#mess_dropout_test_id").hide()

                    $("#mess_dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                    $("#mess_dropout_choice_value_warning_id").hide()
                }
            })

            // reg_1
            $("#reg1_checkbox_id").change(function() {
                if ($("#reg1_checkbox_id")[0].checked) {
                    $("#reg1_float_id").show()
                    $("#reg1_float_choice_id").show()

                    $("#reg1_float_checkbox_id").prop("checked", true)
                    $("#reg1_float_choice_checkbox_id").prop("checked", false)

                    $("#reg1_space_id").show()
                    $("#reg1_group_id").show()
                    $("#reg1_choice_group_id").hide()

                    $("#reg1_tune1_id").show()
                    $("#reg1_tune2_id").show()
                    $("#reg1_tune3_id").show()
                    $("#reg1_test_id").hide()

                    $("#reg1_min_input_id").val(0.01)
                    $("#reg1_max_input_id").val(0.1)
                    $("#reg1_step_input_id").val("")

                    $("#reg1_min_warning_id").hide()
                    $("#reg1_max_warning_id").hide()
                    $("#reg1_step_warning_id").hide()
                } else {
                    $("#reg1_float_id").hide()
                    $("#reg1_float_choice_id").hide()

                    $("#reg1_float_checkbox_id").prop("checked", false)
                    $("#reg1_float_choice_checkbox_id").prop("checked", false)

                    $("#reg1_space_id").hide()
                    $("#reg1_group_id").hide()
                    $("#reg1_choice_group_id").hide()
                }
            })

            $("#reg1_float_checkbox_id").change(function() {
                if ($("#reg1_float_checkbox_id")[0].checked) {
                    is_reg1_choice_flag = false
                    $("#reg1_float_choice_checkbox_id").prop("checked", false)

                    $("#reg1_space_id").show()
                    $("#reg1_group_id").show()
                    $("#reg1_choice_group_id").hide()

                    $("#reg1_tune1_id").show()
                    $("#reg1_tune2_id").show()
                    $("#reg1_tune3_id").show()
                    $("#reg1_test_id").hide()

                    $("#reg1_min_input_id").val(0.01)
                    $("#reg1_max_input_id").val(0.1)
                    $("#reg1_step_input_id").val("")

                    $("#reg1_min_warning_id").hide()
                    $("#reg1_max_warning_id").hide()
                    $("#reg1_step_warning_id").hide()
                }
            })

            $("#reg1_float_choice_checkbox_id").change(function() {
                if ($("#reg1_float_choice_checkbox_id")[0].checked) {
                    is_reg1_choice_flag = true
                    $("#reg1_float_checkbox_id").prop("checked", false)

                    $("#reg1_space_id").show()
                    $("#reg1_group_id").hide()
                    $("#reg1_choice_value_warning_id").show()

                    $("#reg1_tune1_id").hide()
                    $("#reg1_tune2_id").hide()
                    $("#reg1_tune3_id").hide()
                    $("#reg1_test_id").hide()

                    $("#reg1_choice_value_input_id").val("0.01, 0.05, 0.1")

                    $("#reg1_choice_value_warning_id").hide()
                }
            })

            // reg_2
            $("#reg2_checkbox_id").change(function() {
                if ($("#reg2_checkbox_id")[0].checked) {
                    $("#reg2_float_id").show()
                    $("#reg2_float_choice_id").show()

                    $("#reg2_float_checkbox_id").prop("checked", true)
                    $("#reg2_float_choice_checkbox_id").prop("checked", false)

                    $("#reg2_space_id").show()
                    $("#reg2_group_id").show()
                    $("#reg2_choice_group_id").hide()

                    $("#reg2_tune1_id").show()
                    $("#reg2_tune2_id").show()
                    $("#reg2_tune3_id").show()
                    $("#reg2_test_id").hide()

                    $("#reg2_min_input_id").val(0.01)
                    $("#reg2_max_input_id").val(0.1)
                    $("#reg2_step_input_id").val("")

                    $("#reg2_min_warning_id").hide()
                    $("#reg2_max_warning_id").hide()
                    $("#reg2_step_warning_id").hide()
                } else {
                    $("#reg2_float_id").hide()
                    $("#reg2_float_choice_id").hide()

                    $("#reg2_float_checkbox_id").prop("checked", false)
                    $("#reg2_float_choice_checkbox_id").prop("checked", false)

                    $("#reg2_space_id").hide()
                    $("#reg2_group_id").hide()
                    $("#reg2_choice_group_id").hide()
                }
            })

            $("#reg2_float_checkbox_id").change(function() {
                if ($("#reg2_float_checkbox_id")[0].checked) {
                    is_reg2_choice_flag = false
                    $("#reg2_float_choice_checkbox_id").prop("checked", false)

                    $("#reg2_space_id").show()
                    $("#reg2_group_id").show()
                    $("#reg2_choice_group_id").hide()

                    $("#reg2_tune1_id").show()
                    $("#reg2_tune2_id").show()
                    $("#reg2_tune3_id").show()
                    $("#reg2_test_id").hide()

                    $("#reg2_min_input_id").val(0.01)
                    $("#reg2_max_input_id").val(0.1)
                    $("#reg2_step_input_id").val("")

                    $("#reg2_min_warning_id").hide()
                    $("#reg2_max_warning_id").hide()
                    $("#reg2_step_warning_id").hide()
                }
            })

            $("#reg2_float_choice_checkbox_id").change(function() {
                if ($("#reg2_float_choice_checkbox_id")[0].checked) {
                    is_reg2_choice_flag = true
                    $("#reg2_float_checkbox_id").prop("checked", false)

                    $("#reg2_space_id").show()
                    $("#reg2_group_id").hide()
                    $("#reg2_choice_group_id").show()

                    $("#reg2_tune1_id").hide()
                    $("#reg2_tune2_id").hide()
                    $("#reg2_tune3_id").hide()
                    $("#reg2_test_id").hide()

                    $("#reg2_choice_value_input_id").val("0.01, 0.05, 0.1")

                    $("#reg2_choice_value_warning_id").hide()
                }
            })

            // num_layers
            $("#num_layers_checkbox_id").change(function() {
                if ($("#num_layers_checkbox_id")[0].checked) {
                    $("#num_layers_int_id").show()
                    $("#num_layers_int_choice_id").show()

                    $("#num_layers_int_checkbox_id").prop("checked", true)
                    $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                    $("#num_layers_space_id").show()
                    $("#num_layers_group_id").show()
                    $("#num_layers_choice_group_id").hide()

                    $("#num_layers_tune1_id").show()
                    $("#num_layers_tune2_id").show()
                    $("#num_layers_tune3_id").show()
                    $("#num_layers_test_id").hide()

                    $("#num_layers_min_input_id").val(1)
                    $("#num_layers_max_input_id").val(3)
                    $("#num_layers_step_input_id").val("")

                    $("#num_layers_min_warning_id").hide()
                    $("#num_layers_max_warning_id").hide()
                    $("#num_layers_step_warning_id").hide()
                } else {
                    $("#num_layers_int_id").hide()
                    $("#num_layers_int_choice_id").hide()

                    $("#num_layers_int_checkbox_id").prop("checked", false)
                    $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                    $("#num_layers_space_id").hide()
                    $("#num_layers_group_id").hide()
                    $("#num_layers_choice_group_id").hide()
                }
            })

            $("#num_layers_int_checkbox_id").change(function() {
                if ($("#num_layers_int_checkbox_id")[0].checked) {
                    is_num_layers_choice_flag = false
                    $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                    $("#num_layers_space_id").show()
                    $("#num_layers_group_id").show()
                    $("#num_layers_choice_group_id").hide()

                    $("#num_layers_tune1_id").show()
                    $("#num_layers_tune2_id").show()
                    $("#num_layers_tune3_id").show()
                    $("#num_layers_test_id").hide()

                    $("#num_layers_min_input_id").val(1)
                    $("#num_layers_max_input_id").val(3)
                    $("#num_layers_step_input_id").val("")

                    $("#num_layers_min_warning_id").hide()
                    $("#num_layers_max_warning_id").hide()
                    $("#num_layers_step_warning_id").hide()
                }
            })

            $("#num_layers_int_choice_checkbox_id").change(function() {
                if ($("#num_layers_int_choice_checkbox_id")[0].checked) {
                    is_num_layers_choice_flag = true
                    $("#num_layers_int_checkbox_id").prop("checked", false)

                    $("#num_layers_space_id").show()
                    $("#num_layers_group_id").hide()
                    $("#num_layers_choice_group_id").show()

                    $("#num_layers_tune1_id").hide()
                    $("#num_layers_tune2_id").hide()
                    $("#num_layers_tune3_id").hide()
                    $("#num_layers_test_id").hide()

                    $("#num_layers_choice_value_input_id").val("1, 2, 3")

                    $("#num_layers_choice_value_warning_id").hide()
                }
            })

            // maxk
            $("#maxk_checkbox_id").change(function() {
                if ($("#maxk_checkbox_id")[0].checked) {
                    $("#maxk_int_id").show()
                    $("#maxk_int_choice_id").show()

                    $("#maxk_int_checkbox_id").prop("checked", true)
                    $("#maxk_int_choice_checkbox_id").prop("checked", false)

                    $("#maxk_space_id").show()
                    $("#maxk_group_id").show()
                    $("#maxk_choice_group_id").hide()

                    $("#maxk_tune1_id").show()
                    $("#maxk_tune2_id").show()
                    $("#maxk_tune3_id").show()
                    $("#maxk_test_id").hide()

                    $("#maxk_min_input_id").val(30)
                    $("#maxk_max_input_id").val(60)
                    $("#maxk_step_input_id").val("")

                    $("#maxk_min_warning_id").hide()
                    $("#maxk_max_warning_id").hide()
                    $("#maxk_step_warning_id").hide()
                } else {
                    $("#maxk_int_id").hide()
                    $("#maxk_int_choice_id").hide()

                    $("#maxk_int_checkbox_id").prop("checked", false)
                    $("#maxk_int_choice_checkbox_id").prop("checked", false)

                    $("#maxk_space_id").hide()
                    $("#maxk_group_id").hide()
                    $("#maxk_choice_group_id").hide()
                }
            })

            $("#maxk_int_checkbox_id").change(function() {
                if ($("#maxk_int_checkbox_id")[0].checked) {
                    is_maxk_choice_flag = false
                    $("#maxk_int_choice_checkbox_id").prop("checked", false)

                    $("#maxk_space_id").show()
                    $("#maxk_group_id").show()
                    $("#maxk_choice_group_id").hide()

                    $("#maxk_tune1_id").show()
                    $("#maxk_tune2_id").show()
                    $("#maxk_tune3_id").show()
                    $("#maxk_test_id").hide()

                    $("#maxk_min_input_id").val(30)
                    $("#maxk_max_input_id").val(60)
                    $("#maxk_step_input_id").val("")

                    $("#maxk_min_warning_id").hide()
                    $("#maxk_max_warning_id").hide()
                    $("#maxk_step_warning_id").hide()
                }
            })

            $("#maxk_int_choice_checkbox_id").change(function() {
                if ($("#maxk_int_choice_checkbox_id")[0].checked) {
                    is_maxk_choice_flag = true
                    $("#maxk_int_checkbox_id").prop("checked", false)

                    $("#maxk_space_id").show()
                    $("#maxk_group_id").hide()
                    $("#maxk_choice_group_id").show()

                    $("#maxk_tune1_id").hide()
                    $("#maxk_tune2_id").hide()
                    $("#maxk_tune3_id").hide()
                    $("#maxk_test_id").hide()

                    $("#maxk_choice_value_input_id").val("30, 45, 60")

                    $("#maxk_choice_value_warning_id").hide()
                }
            })

            // alpha
            $("#alpha_checkbox_id").change(function() {
                if ($("#alpha_checkbox_id")[0].checked) {
                    $("#alpha_float_id").show()
                    $("#alpha_float_choice_id").show()

                    $("#alpha_float_checkbox_id").prop("checked", true)
                    $("#alpha_float_choice_checkbox_id").prop("checked", false)

                    $("#alpha_space_id").show()
                    $("#alpha_group_id").show()
                    $("#alpha_choice_group_id").hide()

                    $("#alpha_tune1_id").show()
                    $("#alpha_tune2_id").show()
                    $("#alpha_tune3_id").show()
                    $("#alpha_test_id").hide()

                    $("#alpha_min_input_id").val(1)
                    $("#alpha_max_input_id").val(10)
                    $("#alpha_step_input_id").val("")

                    $("#alpha_min_warning_id").hide()
                    $("#alpha_max_warning_id").hide()
                    $("#alpha_step_warning_id").hide()
                } else {
                    $("#alpha_float_id").hide()
                    $("#alpha_float_choice_id").hide()

                    $("#alpha_float_checkbox_id").prop("checked", false)
                    $("#alpha_float_choice_checkbox_id").prop("checked", false)

                    $("#alpha_space_id").hide()
                    $("#alpha_group_id").hide()
                    $("#alpha_choice_group_id").hide()
                }
            })

            $("#alpha_float_checkbox_id").change(function() {
                if ($("#alpha_float_checkbox_id")[0].checked) {
                    is_alpha_choice_flag = false
                    $("#alpha_float_choice_checkbox_id").prop("checked", false)

                    $("#alpha_space_id").show()
                    $("#alpha_group_id").show()
                    $("#alpha_choice_group_id").hide()

                    $("#alpha_tune1_id").show()
                    $("#alpha_tune2_id").show()
                    $("#alpha_tune3_id").show()
                    $("#alpha_test_id").hide()

                    $("#alpha_min_input_id").val(1)
                    $("#alpha_max_input_id").val(10)
                    $("#alpha_step_input_id").val("")

                    $("#alpha_min_warning_id").hide()
                    $("#alpha_max_warning_id").hide()
                    $("#alpha_step_warning_id").hide()
                }
            })

            $("#alpha_float_choice_checkbox_id").change(function() {
                if ($("#alpha_float_choice_checkbox_id")[0].checked) {
                    is_alpha_choice_flag = true
                    $("#alpha_float_checkbox_id").prop("checked", false)

                    $("#alpha_space_id").show()
                    $("#alpha_group_id").hide()
                    $("#alpha_choice_group_id").show()

                    $("#alpha_tune1_id").hide()
                    $("#alpha_tune2_id").hide()
                    $("#alpha_tune3_id").hide()
                    $("#alpha_test_id").hide()

                    $("#alpha_choice_value_input_id").val("1, 5, 10")

                    $("#alpha_choice_value_warning_id").hide()
                }
            })

            // elastic
            $("#elastic_checkbox_id").change(function() {
                if ($("#elastic_checkbox_id")[0].checked) {
                    $("#elastic_float_id").show()
                    $("#elastic_float_choice_id").show()

                    $("#elastic_float_checkbox_id").prop("checked", true)
                    $("#elastic_float_choice_checkbox_id").prop("checked", false)

                    $("#elastic_space_id").show()
                    $("#elastic_group_id").show()
                    $("#elastic_choice_group_id").hide()

                    $("#elastic_tune1_id").show()
                    $("#elastic_tune2_id").show()
                    $("#elastic_tune3_id").show()
                    $("#elastic_test_id").hide()

                    $("#elastic_min_input_id").val(0.1)
                    $("#elastic_max_input_id").val(0.9)
                    $("#elastic_step_input_id").val("")

                    $("#elastic_min_warning_id").hide()
                    $("#elastic_max_warning_id").hide()
                    $("#elastic_step_warning_id").hide()
                } else {
                    $("#elastic_float_id").hide()
                    $("#elastic_float_choice_id").hide()

                    $("#elastic_float_checkbox_id").prop("checked", false)
                    $("#elastic_float_choice_checkbox_id").prop("checked", false)

                    $("#elastic_space_id").hide()
                    $("#elastic_group_id").hide()
                    $("#elastic_choice_group_id").hide()
                }
            })

            $("#elastic_float_checkbox_id").change(function() {
                if ($("#elastic_float_checkbox_id")[0].checked) {
                    is_elastic_choice_flag = false
                    $("#elastic_float_choice_checkbox_id").prop("checked", false)

                    $("#elastic_space_id").show()
                    $("#elastic_group_id").show()
                    $("#elastic_choice_group_id").hide()

                    $("#elastic_tune1_id").show()
                    $("#elastic_tune2_id").show()
                    $("#elastic_tune3_id").show()
                    $("#elastic_test_id").hide()

                    $("#elastic_min_input_id").val(0.1)
                    $("#elastic_max_input_id").val(0.9)
                    $("#elastic_step_input_id").val("")

                    $("#elastic_min_warning_id").hide()
                    $("#elastic_max_warning_id").hide()
                    $("#elastic_step_warning_id").hide()
                }
            })

            $("#elastic_float_choice_checkbox_id").change(function() {
                if ($("#elastic_float_choice_checkbox_id")[0].checked) {
                    is_elastic_choice_flag = true
                    $("#elastic_float_checkbox_id").prop("checked", false)

                    $("#elastic_space_id").show()
                    $("#elastic_group_id").hide()
                    $("#elastic_choice_group_id").show()

                    $("#elastic_tune1_id").hide()
                    $("#elastic_tune2_id").hide()
                    $("#elastic_tune3_id").hide()
                    $("#elastic_test_id").hide()

                    $("#elastic_choice_value_input_id").val("0.1, 0.5, 0.9")

                    $("#elastic_choice_value_warning_id").hide()
                }
            })

            // context_window
            $("#context_window_checkbox_id").change(function() {
                if ($("#context_window_checkbox_id")[0].checked) {
                    $("#context_window_int_id").show()
                    $("#context_window_int_choice_id").show()

                    $("#context_window_int_checkbox_id").prop("checked", true)
                    $("#context_window_int_choice_checkbox_id").prop("checked", false)

                    $("#context_window_space_id").show()
                    $("#context_window_group_id").show()
                    $("#context_window_choice_group_id").hide()

                    $("#context_window_tune1_id").show()
                    $("#context_window_tune2_id").show()
                    $("#context_window_tune3_id").show()
                    $("#context_window_test_id").hide()

                    $("#context_window_min_input_id").val(1)
                    $("#context_window_max_input_id").val(2)
                    $("#context_window_step_input_id").val("")

                    $("#context_window_size_min_warning_id").hide()
                    $("#context_window_max_warning_id").hide()
                    $("#context_window_step_warning_id").hide()
                } else {
                    $("#context_window_int_id").hide()
                    $("#context_window_int_choice_id").hide()

                    $("#context_window_int_checkbox_id").prop("checked", false)
                    $("#context_window_int_choice_checkbox_id").prop("checked", false)

                    $("#context_window_space_id").hide()
                    $("#context_window_group_id").hide()
                    $("#context_window_choice_group_id").hide()
                }
            })

            $("#context_window_int_checkbox_id").change(function() {
                if ($("#context_window_int_checkbox_id")[0].checked) {
                    is_context_window_choice_flag = false
                    $("#context_window_int_choice_checkbox_id").prop("checked", false)

                    $("#context_window_space_id").show()
                    $("#context_window_group_id").show()
                    $("#context_window_choice_group_id").hide()

                    $("#context_window_tune1_id").show()
                    $("#context_window_tune2_id").show()
                    $("#context_window_tune3_id").show()
                    $("#context_window_test_id").hide()

                    $("#context_window_min_input_id").val(1)
                    $("#context_window_max_input_id").val(2)
                    $("#context_window_step_input_id").val("")

                    $("#context_window_size_min_warning_id").hide()
                    $("#context_window_max_warning_id").hide()
                    $("#context_window_step_warning_id").hide()
                }
            })

            $("#context_window_int_choice_checkbox_id").change(function() {
                if ($("#context_window_int_choice_checkbox_id")[0].checked) {
                    is_context_window_choice_flag = true
                    $("#context_window_int_checkbox_id").prop("checked", false)

                    $("#context_window_space_id").show()
                    $("#context_window_group_id").hide()
                    $("#context_window_choice_group_id").show()

                    $("#context_window_tune1_id").hide()
                    $("#context_window_tune2_id").hide()
                    $("#context_window_tune3_id").hide()
                    $("#context_window_test_id").hide()

                    $("#context_window_choice_value_input_id").val("1, 2, 3")

                    $("#context_window_choice_value_warning_id").hide()
                }
            })

            // rho
            $("#rho_checkbox_id").change(function() {
                if ($("#rho_checkbox_id")[0].checked) {
                    $("#rho_float_id").show()
                    $("#rho_float_choice_id").show()

                    $("#rho_float_checkbox_id").prop("checked", true)
                    $("#rho_float_choice_checkbox_id").prop("checked", false)

                    $("#rho_space_id").show()
                    $("#rho_group_id").show()
                    $("#rho_choice_group_id").hide()

                    $("#rho_tune1_id").show()
                    $("#rho_tune2_id").show()
                    $("#rho_tune3_id").show()
                    $("#rho_test_id").hide()

                    $("#rho_min_input_id").val(0.01)
                    $("#rho_max_input_id").val(0.5)
                    $("#rho_step_input_id").val("")

                    $("#rho_min_warning_id").hide()
                    $("#rho_max_warning_id").hide()
                    $("#rho_step_warning_id").hide()
                } else {
                    $("#rho_float_id").hide()
                    $("#rho_float_choice_id").hide()

                    $("#rho_float_checkbox_id").prop("checked", false)
                    $("#rho_float_choice_checkbox_id").prop("checked", false)

                    $("#rho_space_id").hide()
                    $("#rho_group_id").hide()
                    $("#rho_choice_group_id").hide()
                }
            })

            $("#rho_float_checkbox_id").change(function() {
                if ($("#rho_float_checkbox_id")[0].checked) {
                    is_rho_choice_flag = false
                    $("#rho_float_choice_checkbox_id").prop("checked", false)

                    $("#rho_space_id").show()
                    $("#rho_group_id").show()
                    $("#rho_choice_group_id").hide()

                    $("#rho_tune1_id").show()
                    $("#rho_tune2_id").show()
                    $("#rho_tune3_id").show()
                    $("#rho_test_id").hide()

                    $("#rho_min_input_id").val(0.01)
                    $("#rho_max_input_id").val(0.5)
                    $("#rho_step_input_id").val("")

                    $("#rho_min_warning_id").hide()
                    $("#rho_max_warning_id").hide()
                    $("#rho_step_warning_id").hide()
                }
            })

            $("#rho_float_choice_checkbox_id").change(function() {
                if ($("#rho_float_choice_checkbox_id")[0].checked) {
                    is_rho_choice_flag = true
                    $("#rho_float_checkbox_id").prop("checked", false)

                    $("#rho_space_id").show()
                    $("#rho_group_id").hide()
                    $("#rho_choice_group_id").show()

                    $("#rho_tune1_id").hide()
                    $("#rho_tune2_id").hide()
                    $("#rho_tune3_id").hide()
                    $("#rho_test_id").hide()

                    $("#rho_choice_value_input_id").val("0.01, 0.3, 0.5")

                    $("#rho_choice_value_warning_id").hide()
                }
            })

            // reg
            $("#reg_checkbox_id").change(function() {
                if ($("#reg_checkbox_id")[0].checked) {
                    $("#reg_float_id").show()
                    $("#reg_float_choice_id").show()

                    $("#reg_float_checkbox_id").prop("checked", true)
                    $("#reg_float_choice_checkbox_id").prop("checked", false)

                    $("#reg_space_id").show()
                    $("#reg_group_id").show()
                    $("#reg_choice_group_id").hide()

                    $("#reg_tune1_id").show()
                    $("#reg_tune2_id").show()
                    $("#reg_tune3_id").show()
                    $("#reg_test_id").hide()

                    $("#reg_min_input_id").val(10)
                    $("#reg_max_input_id").val(1000)
                    $("#reg_step_input_id").val("")

                    $("#reg_min_warning_id").hide()
                    $("#reg_max_warning_id").hide()
                    $("#reg_step_warning_id").hide()
                } else {
                    $("#reg_float_id").hide()
                    $("#reg_float_choice_id").hide()

                    $("#reg_float_checkbox_id").prop("checked", false)
                    $("#reg_float_choice_checkbox_id").prop("checked", false)

                    $("#reg_space_id").hide()
                    $("#reg_group_id").hide()
                    $("#reg_choice_group_id").hide()
                }
            })

            $("#reg_float_checkbox_id").change(function() {
                if ($("#reg_float_checkbox_id")[0].checked) {
                    is_reg_choice_flag = false
                    $("#reg_float_choice_checkbox_id").prop("checked", false)

                    $("#reg_space_id").show()
                    $("#reg_group_id").show()
                    $("#reg_choice_group_id").hide()

                    $("#reg_tune1_id").show()
                    $("#reg_tune2_id").show()
                    $("#reg_tune3_id").show()
                    $("#reg_test_id").hide()

                    $("#reg_min_input_id").val(10)
                    $("#reg_max_input_id").val(1000)
                    $("#reg_step_input_id").val("")

                    $("#reg_min_warning_id").hide()
                    $("#reg_max_warning_id").hide()
                    $("#reg_step_warning_id").hide()
                }
            })

            $("#reg_float_choice_checkbox_id").change(function() {
                if ($("#reg_float_choice_checkbox_id")[0].checked) {
                    is_reg_choice_flag = true
                    $("#reg_float_checkbox_id").prop("checked", false)

                    $("#reg_space_id").show()
                    $("#reg_group_id").hide()
                    $("#reg_choice_group_id").show()

                    $("#reg_tune1_id").hide()
                    $("#reg_tune2_id").hide()
                    $("#reg_tune3_id").hide()
                    $("#reg_test_id").hide()

                    $("#reg_choice_value_input_id").val("10, 500, 1000")

                    $("#reg_choice_value_warning_id").hide()
                }
            })
        }

        // Changes in Algorithm Specific Settings Part will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE"
            if ($("#algo_name_selector_id").val() == "ease"){
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").hide()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").hide()
                $("#anneal_cap_id").hide()
                $("#factors_id").hide()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").show()
            // If choose "FM" or "MF"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "mf") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").show()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").show()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").show()
                $("#reg2_id").show()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "NFM" or "NeuMF"
            } else if ($("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").hide()
                $("#dropout_id").show()
                $("#lr_id").show()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").show()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").show()
                $("#reg2_id").show()
                $("#num_layers_id").show()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "NGCF"
            } else if ($("#algo_name_selector_id").val() == "ngcf") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").show()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").show()
                $("#node_dropout_id").show()
                $("#mess_dropout_id").show()
                $("#reg1_id").show()
                $("#reg2_id").show()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").show()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").show()
                $("#node_dropout_id").show()
                $("#mess_dropout_id").show()
                $("#reg1_id").show()
                $("#reg2_id").show()
                $("#num_layers_id").show()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "Multi-VAE"
            } else if ($("#algo_name_selector_id").val() == "multi-vae") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").show()
                $("#dropout_id").show()
                $("#lr_id").show()
                $("#anneal_cap_id").show()
                $("#factors_id").hide()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "Item2Vec"
            } else if ($("#algo_name_selector_id").val() == "item2vec") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").show()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").show()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").show()
                $("#rho_id").show()
                $("#reg_id").hide()
            // If choose "SLIM"
            } else if ($("#algo_name_selector_id").val() == "slim") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").hide()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").hide()
                $("#anneal_cap_id").hide()
                $("#factors_id").hide()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").show()
                $("#elastic_id").show()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "PureSVD"
            } else if ($("#algo_name_selector_id").val() == "puresvd") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").hide()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").hide()
                $("#anneal_cap_id").hide()
                $("#factors_id").show()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "ItemKNN"
            } else if ($("#algo_name_selector_id").val() == "itemknn") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").hide()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").hide()
                $("#anneal_cap_id").hide()
                $("#factors_id").hide()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").show()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            // If choose "MostPop"
            } else if ($("#algo_name_selector_id").val() == "mostpop") {
                // Changes in Algorithm Specific Setting
                $("#batch_size_id").hide()
                $("#latent_dim_id").hide()
                $("#dropout_id").hide()
                $("#lr_id").hide()
                $("#anneal_cap_id").hide()
                $("#factors_id").hide()
                $("#num_ng_id").hide()
                $("#node_dropout_id").hide()
                $("#mess_dropout_id").hide()
                $("#reg1_id").hide()
                $("#reg2_id").hide()
                $("#num_layers_id").hide()
                $("#maxk_id").hide()
                $("#alpha_id").hide()
                $("#elastic_id").hide()
                $("#context_window_id").hide()
                $("#rho_id").hide()
                $("#reg_id").hide()
            }
        })

        // Check whether the input item is numeric or a number or an integer in Algo-specific-setting Part
        // Check batch_size 
        $("#batch_size_min_input_id").change(function(){
            var val_min_batch_size = $("#batch_size_min_input_id").val()
            test_val_min_batch_size = Number(val_min_batch_size)
            if (!Number.isInteger(test_val_min_batch_size)) {
                $("#batch_size_min_input_id").val(val_min_batch_size)
                $("#batch_size_min_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                var max_batch_size = Number($("#batch_size_max_input_id").val())
                var flag = false
                // Set input range for "min_batch_size"
                // The value should be an integer larger than 0
                if ($("#batch_size_min_input_id").val() < 1) {
                    $("#batch_size_min_input_id").val(1)
                    flag = true
                    is_batch_size_correct_flag = true
                } else {
                    $("#batch_size_min_input_id").val(Number(val_min_batch_size))
                    $("#batch_size_min_warning_id").hide()
                    is_batch_size_correct_flag = true
                }
                if (!Number.isInteger(max_batch_size)) {
                    $("#batch_size_max_warning_id").show()
                    is_batch_size_correct_flag = false
                } else {
                    if (test_val_min_batch_size >= max_batch_size) {
                        $("#batch_size_min_warning_id").show()
                        $("#batch_size_max_warning_id").show()
                        is_batch_size_correct_flag = false
                    } else {
                        $("#batch_size_min_warning_id").hide()
                        $("#batch_size_max_warning_id").hide()
                        is_batch_size_correct_flag = true
                    }
                }
                if (flag) {
                    $("#batch_size_min_warning_id").show()
                }
            }
        })

        $("#batch_size_max_input_id").change(function(){
            var val_max_batch_size = $("#batch_size_max_input_id").val()
            test_val_max_batch_size = Number(val_max_batch_size)
            if (!Number.isInteger(test_val_max_batch_size)) {
                $("#batch_size_max_input_id").val(val_max_batch_size)
                $("#batch_size_max_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                var min_batch_size = Number($("#batch_size_min_input_id").val())
                var flag = false
                // Set input range for "max_batch_size"
                // The value should be an integer larger than "min_batch_size"
                if ($("#batch_size_max_input_id").val() > 1) {
                    $("#batch_size_max_input_id").val(Number(val_max_batch_size))
                    flag = true
                    is_batch_size_correct_flag = true
                } else {
                    $("#batch_size_max_input_id").val(2)
                    $("#batch_size_max_warning_id").show()
                    is_batch_size_correct_flag = true
                }
                if (!Number.isInteger(min_batch_size)) {
                    $("#batch_size_min_warning_id").show()
                    is_batch_size_correct_flag = false
                } else {
                    if (test_val_max_batch_size <= min_batch_size) {
                        $("#batch_size_min_warning_id").show()
                        $("#batch_size_max_warning_id").show()
                        is_batch_size_correct_flag = false
                    } else {
                        $("#batch_size_min_warning_id").hide()
                        $("#batch_size_max_warning_id").hide()
                        is_batch_size_correct_flag = true
                    }
                }
                if (flag) {
                    $("#batch_size_max_warning_id").hide()
                }
            }
        })

        $("#batch_size_step_input_id").change(function(){
            var val_step_batch_size = $("#batch_size_step_input_id").val()
            test_val_step_batch_size = Number(val_step_batch_size)
            if (!Number.isInteger(test_val_step_batch_size)) {
                $("#batch_size_step_input_id").val(val_step_batch_size)
                $("#batch_size_step_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                // Set input range for "step_batch_size"
                // The value should be an integer larger than 0
                if (Number($("#batch_size_step_input_id").val()) < 1) {
                    $("#batch_size_step_input_id").val(1)
                    $("#batch_size_step_warning_id").show()
                    is_batch_size_correct_flag = true
                } else {
                    $("#batch_size_step_input_id").val(Number(val_step_batch_size))                
                    $("#batch_size_step_warning_id").hide()
                    is_batch_size_correct_flag = true
                }
            }
        })

        $("#batch_size_choice_value_input_id").change(function() {
            var batch_size_choice_string = $("#batch_size_choice_value_input_id").val()
            batch_size_choice_values = batch_size_choice_string.split(",")

            is_batch_size_correct_flag = true
            if (batch_size_choice_values.length < 1 || batch_size_choice_values == "") {
                is_batch_size_correct_flag = false
            } else {
                for (let i = 0; i < batch_size_choice_values.length; i++) {
                    if (!Number.isInteger(Number(batch_size_choice_values[i]))) {
                        is_batch_size_correct_flag = false
                        break
                    }
                }
            }

            if (is_batch_size_correct_flag) {
                $("#batch_size_choice_value_warning_id").hide()
            } else {
                $("#batch_size_choice_value_warning_id").show()
            }
        })

        // Check latent_dim
        $("#latent_dim_min_input_id").change(function(){
            var val_min_latent_dim = $("#latent_dim_min_input_id").val()
            test_val_min_latent_dim = Number(val_min_latent_dim)
            if (!Number.isInteger(test_val_min_latent_dim)) {
                $("#latent_dim_min_input_id").val(val_min_latent_dim)
                $("#latent_dim_min_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                var max_latent_dim = Number($("#latent_dim_max_input_id").val())
                var flag = false
                // Set input range for "min_latent_dim"
                // The value should be an integer larger than 0
                if ($("#latent_dim_min_input_id").val() < 1) {
                    $("#latent_dim_min_input_id").val(1)
                    flag = true
                    is_latent_dim_correct_flag = true
                } else {
                    $("#latent_dim_min_input_id").val(Number(val_min_latent_dim))
                    $("#latent_dim_min_warning_id").hide()
                    is_latent_dim_correct_flag = true
                }
                if (!Number.isInteger(max_latent_dim)) {
                    $("#latent_dim_max_warning_id").show()
                    is_latent_dim_correct_flag = false
                } else {
                    if (test_val_min_latent_dim >= max_latent_dim) {
                        $("#latent_dim_min_warning_id").show()
                        $("#latent_dim_max_warning_id").show()
                        is_latent_dim_correct_flag = false
                    } else {
                        $("#latent_dim_min_warning_id").hide()
                        $("#latent_dim_max_warning_id").hide()
                        is_latent_dim_correct_flag = true
                    }
                }
                if (flag) {
                    $("#latent_dim_min_warning_id").show()
                }
            }
        })

        $("#latent_dim_max_input_id").change(function(){
            var val_max_latent_dim = $("#latent_dim_max_input_id").val()
            test_val_max_latent_dim = Number(val_max_latent_dim)
            if (!Number.isInteger(test_val_max_latent_dim)) {
                $("#latent_dim_max_input_id").val(val_max_latent_dim)
                $("#latent_dim_max_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                var min_latent_dim = Number($("#latent_dim_min_input_id").val())
                var flag = false
                // Set input range for "max_latent_dim"
                // The value should be an integer larger than "min_latent_dim"
                if ($("#latent_dim_max_input_id").val() > 1) {
                    $("#latent_dim_max_input_id").val(Number(val_max_latent_dim))
                    flag = true
                    is_latent_dim_correct_flag = true
                } else {
                    $("#latent_dim_max_input_id").val(2)
                    $("#latent_dim_max_warning_id").show()
                    is_latent_dim_correct_flag = true
                }
                if (!Number.isInteger(min_latent_dim)) {
                    $("#latent_dim_min_warning_id").show()
                    is_latent_dim_correct_flag = false
                } else {
                    if (test_val_max_latent_dim <= min_latent_dim) {
                        $("#latent_dim_min_warning_id").show()
                        $("#latent_dim_max_warning_id").show()
                        is_latent_dim_correct_flag = false
                    } else {
                        $("#latent_dim_min_warning_id").hide()
                        $("#latent_dim_max_warning_id").hide()
                        is_latent_dim_correct_flag = true
                    }
                }
                if (flag) {
                    $("#latent_dim_max_warning_id").hide()
                }
            }
        })

        $("#latent_dim_step_input_id").change(function(){
            var val_step_latent_dim = $("#latent_dim_step_input_id").val()
            test_val_step_latent_dim = Number(val_step_latent_dim)
            if (!Number.isInteger(test_val_step_latent_dim)) {
                $("#latent_dim_step_input_id").val(val_step_latent_dim)
                $("#latent_dim_step_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                // Set input range for "step_latent_dim"
                // The value should be an integer larger than 0
                if ($("#latent_dim_step_input_id").val() < 1) {
                    $("#latent_dim_step_input_id").val(1)
                    $("#latent_dim_step_warning_id").show()
                    is_latent_dim_correct_flag = true
                } else {
                    $("#latent_dim_step_input_id").val(Number(val_step_latent_dim))
                    $("#latent_dim_step_warning_id").hide()
                    is_latent_dim_correct_flag = true
                }
            }
        })

        $("#latent_dim_choice_value_input_id").change(function() {
            var latent_dim_choice_string = $("#latent_dim_choice_value_input_id").val()
            latent_dim_choice_values = latent_dim_choice_string.split(",")

            is_latent_dim_correct_flag = true
            if (latent_dim_choice_values.length < 1 || latent_dim_choice_values == "") {
                is_latent_dim_correct_flag = false
            } else {
                for (let i = 0; i < latent_dim_choice_values.length; i++) {
                    if (!Number.isInteger(Number(latent_dim_choice_values[i]))) {
                        is_latent_dim_correct_flag = false
                        break
                    }
                }
            }

            if (is_latent_dim_correct_flag) {
                $("#latent_dim_choice_value_warning_id").hide()
            } else {
                $("#latent_dim_choice_value_warning_id").show()
            }
        })

        // Check factors
        $("#factors_min_input_id").change(function(){
            var val_min_factors = $("#factors_min_input_id").val()
            test_val_min_factors = Number(val_min_factors)
            if (!Number.isInteger(test_val_min_factors)) {
                $("#factors_min_input_id").val(val_min_factors)
                $("#factors_min_warning_id").show()
                is_factors_correct_flag = false
            } else {
                var max_factors = Number($("#factors_max_input_id").val())
                var flag = false
                // Set input range for "min_factors"
                // The value should be an integer larger than 0
                if ($("#factors_min_input_id").val() < 1) {
                    $("#factors_min_input_id").val(1)
                    flag = true
                    is_factors_correct_flag = true
                } else {
                    $("#factors_min_input_id").val(Number(val_min_factors))
                    $("#factors_min_warning_id").hide()
                    is_factors_correct_flag = true
                }
                if (!Number.isInteger(max_factors)) {
                    $("#factors_max_warning_id").show()
                    is_factors_correct_flag = false
                } else {
                    if (test_val_min_factors >= max_factors) {
                        $("#factors_min_warning_id").show()
                        $("#factors_max_warning_id").show()
                        is_factors_correct_flag = false
                    } else {
                        $("#factors_min_warning_id").hide()
                        $("#factors_max_warning_id").hide()
                        is_factors_correct_flag = true
                    }
                }
                if (flag) {
                    $("#factors_min_warning_id").show()
                }
            }
        })

        $("#factors_max_input_id").change(function(){
            var val_max_factors = $("#factors_max_input_id").val()
            test_val_max_factors = Number(val_max_factors)
            if (!Number.isInteger(test_val_max_factors)) {
                $("#factors_max_input_id").val(val_max_factors)
                $("#factors_max_warning_id").show()
                is_factors_correct_flag = false
            } else {
                var min_factors = Number($("#factors_min_input_id").val())
                var flag = false
                // Set input range for "max_factors"
                // The value should be an integer larger than "min_factors"
                if ($("#factors_max_input_id").val() > 1) {
                    $("#factors_max_input_id").val(Number(val_max_factors))
                    flag = true
                    is_factors_correct_flag = true
                } else {
                    $("#factors_max_input_id").val(2)
                    $("#factors_max_warning_id").show()
                    is_factors_correct_flag = true
                }
                if (!Number.isInteger(min_factors)) {
                    $("#factors_min_warning_id").show()
                    is_factors_correct_flag = false
                } else {
                    if (test_val_max_factors <= min_factors) {
                        $("#factors_min_warning_id").show()
                        $("#factors_max_warning_id").show()
                        is_factors_correct_flag = false
                    } else {
                        $("#factors_min_warning_id").hide()
                        $("#factors_max_warning_id").hide()
                        is_factors_correct_flag = true
                    }
                }
                if (flag) {
                    $("#factors_max_warning_id").hide()
                }
            }
        })

        $("#factors_step_input_id").change(function(){
            var val_step_factors = $("#factors_step_input_id").val()
            test_val_step_factors = Number(val_step_factors)
            if (!Number.isInteger(test_val_step_factors)) {
                $("#factors_step_input_id").val(val_step_factors)
                $("#factors_step_warning_id").show()
                is_factors_correct_flag = false
            } else {
                // Set input range for "step_factors"
                // The value should be an integer larger than 0
                if ($("#factors_step_input_id").val() < 1) {
                    $("#factors_step_input_id").val(1)
                    $("#factors_step_warning_id").show()
                    is_factors_correct_flag = true
                } else {
                    $("#factors_step_input_id").val(Number(val_step_factors))
                    $("#factors_step_warning_id").hide()
                    is_factors_correct_flag = true
                }
            }
        })

        $("#factors_choice_value_input_id").change(function() {
            var factors_choice_string = $("#factors_choice_value_input_id").val()
            factors_choice_values = factors_choice_string.split(",")

            is_factors_correct_flag = true
            if (factors_choice_values.length < 1 || factors_choice_values == "") {
                is_factors_correct_flag = false
            } else {
                for (let i = 0; i < factors_choice_values.length; i++) {
                    if (!Number.isInteger(Number(factors_choice_values[i]))) {
                        is_factors_correct_flag = false
                        break
                    }
                }
            }

            if (is_factors_correct_flag) {
                $("#factors_choice_value_warning_id").hide()
            } else {
                $("#factors_choice_value_warning_id").show()
            }
        })

        // Check num_ng
        $("#num_ng_min_input_id").change(function(){
            var val_min_num_ng = $("#num_ng_min_input_id").val()
            test_val_min_num_ng = Number(val_min_num_ng)
            if (!Number.isInteger(test_val_min_num_ng)) {
                $("#num_ng_min_input_id").val(val_min_num_ng)
                $("#num_ng_min_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                var max_num_ng = Number($("#num_ng_max_input_id").val())
                var flag = false
                // Set input range for "min_num_ng"
                // The value should be an integer larger than 0
                if ($("#num_ng_min_input_id").val() < 1) {
                    $("#num_ng_min_input_id").val(1)
                    flag = true
                    is_num_ng_correct_flag = true
                } else {
                    $("#num_ng_min_input_id").val(Number(val_min_num_ng))
                    $("#num_ng_min_warning_id").hide()
                    is_num_ng_correct_flag = true
                }
                if (!Number.isInteger(max_num_ng)) {
                    $("#num_ng_max_warning_id").show()
                    is_num_ng_correct_flag = false
                } else {
                    if (test_val_min_num_ng >= max_num_ng) {
                        $("#num_ng_min_warning_id").show()
                        $("#num_ng_max_warning_id").show()
                        is_num_ng_correct_flag = false
                    } else {
                        $("#num_ng_min_warning_id").hide()
                        $("#num_ng_max_warning_id").hide()
                        is_num_ng_correct_flag = true
                    }
                }
                if (flag) {
                    $("#num_ng_min_warning_id").show()
                }
            }
        })

        $("#num_ng_max_input_id").change(function(){
            var val_max_num_ng = $("#num_ng_max_input_id").val()
            test_val_max_num_ng = Number(val_max_num_ng)
            if (!Number.isInteger(test_val_max_num_ng)) {
                $("#num_ng_max_input_id").val(val_max_num_ng)
                $("#num_ng_max_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                var min_num_ng = Number($("#num_ng_min_input_id").val())
                var flag = false
                // Set input range for "max_num_ng"
                // The value should be an integer larger than "min_num_ng"
                if ($("#num_ng_max_input_id").val() > 1) {
                    $("#num_ng_max_input_id").val(Number(val_max_num_ng))
                    flag = true
                    is_num_ng_correct_flag = true
                } else {
                    $("#num_ng_max_input_id").val(2)
                    $("#num_ng_max_warning_id").show()
                    is_num_ng_correct_flag = true
                }
                if (!Number.isInteger(min_num_ng)) {
                    $("#num_ng_min_warning_id").show()
                    is_num_ng_correct_flag = false
                } else {
                    if (test_val_max_num_ng <= min_num_ng) {
                        $("#num_ng_min_warning_id").show()
                        $("#num_ng_max_warning_id").show()
                        is_num_ng_correct_flag = false
                    } else {
                        $("#num_ng_min_warning_id").hide()
                        $("#num_ng_max_warning_id").hide()
                        is_num_ng_correct_flag = true
                    }
                }
                if (flag) {
                    $("#num_ng_max_warning_id").hide()
                }
            }
        })

        $("#num_ng_step_input_id").change(function(){
            var val_step_num_ng = $("#num_ng_step_input_id").val()
            test_val_step_num_ng = Number(val_step_num_ng)
            if (!Number.isInteger(test_val_step_num_ng)) {
                $("#num_ng_step_input_id").val(val_step_num_ng)
                $("#num_ng_step_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                // Set input range for "step_num_ng"
                // The value should be an integer larger than 0
                if ($("#num_ng_step_input_id").val() < 1) {
                    $("#num_ng_step_input_id").val(1)
                    $("#num_ng_step_warning_id").show()
                    is_num_ng_correct_flag = true
                } else {
                    $("#num_ng_step_input_id").val(Number(val_step_num_ng))
                    $("#num_ng_step_warning_id").hide()
                    is_num_ng_correct_flag = true
                }
            }
        })

        $("#num_ng_choice_value_input_id").change(function() {
            var num_ng_choice_string = $("#num_ng_choice_value_input_id").val()
            num_ng_choice_values = num_ng_choice_string.split(",")

            is_num_ng_correct_flag = true
            if (num_ng_choice_values.length < 1 || num_ng_choice_values == "") {
                is_num_ng_correct_flag = false
            } else {
                for (let i = 0; i < num_ng_choice_values.length; i++) {
                    if (!Number.isInteger(Number(num_ng_choice_values[i]))) {
                        is_num_ng_correct_flag = false
                        break
                    }
                }
            }

            if (is_num_ng_correct_flag) {
                $("#num_ng_choice_value_warning_id").hide()
            } else {
                $("#num_ng_choice_value_warning_id").show()
            }
        })

        // Check num_layers
        $("#num_layers_min_input_id").change(function(){
            var val_min_num_layers = $("#num_layers_min_input_id").val()
            test_val_min_num_layers = Number(val_min_num_layers)
            if (!Number.isInteger(test_val_min_num_layers)) {
                $("#num_layers_min_input_id").val(val_min_num_layers)
                $("#num_layers_min_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                var max_num_layers = Number($("#num_layers_max_input_id").val())
                var flag = false
                // Set input range for "min_num_layers"
                // The value should be an integer larger than 0
                if ($("#num_layers_min_input_id").val() < 1) {
                    $("#num_layers_min_input_id").val(1)
                    flag = true
                    is_num_layers_correct_flag = true
                } else {
                    $("#num_layers_min_input_id").val(Number(val_min_num_layers))
                    $("#num_layers_min_warning_id").hide()
                    is_num_layers_correct_flag = true
                }
                if (!Number.isInteger(max_num_layers)) {
                    $("#num_layers_max_warning_id").show()
                    is_num_layers_correct_flag = false
                } else {
                    if (test_val_min_num_layers >= max_num_layers) {
                        $("#num_layers_min_warning_id").show()
                        $("#num_layers_max_warning_id").show()
                        is_num_layers_correct_flag = false
                    } else {
                        $("#num_layers_min_warning_id").hide()
                        $("#num_layers_max_warning_id").hide()
                        is_num_layers_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#num_layers_min_warning_id").show()
                }
            }
        })

        $("#num_layers_max_input_id").change(function(){
            var val_max_num_layers = $("#num_layers_max_input_id").val()
            test_val_max_num_layers = Number(val_max_num_layers)
            if (!Number.isInteger(test_val_max_num_layers)) {
                $("#num_layers_max_input_id").val(val_max_num_layers)
                $("#num_layers_max_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                var min_num_layers = Number($("#num_layers_min_input_id").val())
                var flag = false
                // Set input range for "max_num_layers"
                // The value should be an integer larger than "min_num_layers"
                if ($("#num_layers_max_input_id").val() > 1) {
                    $("#num_layers_max_input_id").val(Number(val_max_num_layers))
                    flag = true
                    is_num_layers_correct_flag = true
                } else {
                    $("#num_layers_max_input_id").val(2)
                    $("#num_layers_max_warning_id").show()
                    is_num_layers_correct_flag = true
                }
                if (!Number.isInteger(min_num_layers)) {
                    $("#num_layers_min_warning_id").show()
                    is_num_layers_correct_flag = false
                } else {
                    if (test_val_max_num_layers <= min_num_layers) {
                        $("#num_layers_min_warning_id").show()
                        $("#num_layers_max_warning_id").show()
                        is_num_layers_correct_flag = false
                    } else {
                        $("#num_layers_min_warning_id").hide()
                        $("#num_layers_max_warning_id").hide()
                        is_num_layers_correct_flag = true
                    }
                }
                if (flag) {
                    $("#num_layers_max_warning_id").hide()
                }
            }
        })

        $("#num_layers_step_input_id").change(function(){
            var val_step_num_layers = $("#num_layers_step_input_id").val()
            test_val_step_num_layers = Number(val_step_num_layers)
            if (!Number.isInteger(test_val_step_num_layers)) {
                $("#num_layers_step_input_id").val(val_step_num_layers)
                $("#num_layers_step_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                // Set input range for "step_num_layers"
                // The value should be an integer larger than 0
                if ($("#num_layers_step_input_id").val() < 1) {
                    $("#num_layers_step_input_id").val(1)
                    $("#num_layers_step_warning_id").show()
                    is_num_layers_correct_flag = true
                } else {
                    $("#num_layers_step_input_id").val(Number(val_step_num_layers))
                    $("#num_layers_step_warning_id").hide()
                    is_num_layers_correct_flag = true
                }
            }
        })

        $("#num_layers_choice_value_input_id").change(function() {
            var num_layers_choice_string = $("#num_layers_choice_value_input_id").val()
            num_layers_choice_values = num_layers_choice_string.split(",")

            is_num_layers_correct_flag = true
            if (num_layers_choice_values.length < 1 || num_layers_choice_values == "") {
                is_num_layers_correct_flag = false
            } else {
                for (let i = 0; i < num_layers_choice_values.length; i++) {
                    if (!Number.isInteger(Number(num_layers_choice_values[i]))) {
                        is_num_layers_correct_flag = false
                        break
                    }
                }
            }

            if (is_num_layers_correct_flag) {
                $("#num_layers_choice_value_warning_id").hide()
            } else {
                $("#num_layers_choice_value_warning_id").show()
            }
        })

        // Check maxk
        $("#maxk_min_input_id").change(function(){
            var val_min_maxk = $("#maxk_min_input_id").val()
            test_val_min_maxk = Number(val_min_maxk)
            if (!Number.isInteger(test_val_min_maxk)) {
                $("#maxk_min_input_id").val(val_min_maxk)
                $("#maxk_min_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                var max_maxk = Number($("#maxk_max_input_id").val())
                var flag = false
                // Set input range for "min_maxk"
                // The value should be an integer larger than 0
                if ($("#maxk_min_input_id").val() < 1) {
                    $("#maxk_min_input_id").val(1)
                    flag = true
                    is_maxk_correct_flag = true
                } else {
                    $("#maxk_min_input_id").val(Number(val_min_maxk))
                    $("#maxk_min_warning_id").hide()
                    is_maxk_correct_flag = true
                }
                if (!Number.isInteger(max_maxk)) {
                    $("#maxk_max_warning_id").show()
                    is_maxk_correct_flag = false
                } else {
                    if (test_val_min_maxk >= max_maxk) {
                        $("#maxk_min_warning_id").show()
                        $("#maxk_max_warning_id").show()
                        is_maxk_correct_flag = false
                    } else {
                        $("#maxk_min_warning_id").hide()
                        $("#maxk_max_warning_id").hide()
                        is_maxk_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#maxk_min_warning_id").show()
                }
            }
        })

        $("#maxk_max_input_id").change(function(){
            var val_max_maxk = $("#maxk_max_input_id").val()
            test_val_max_maxk = Number(val_max_maxk)
            if (!Number.isInteger(test_val_max_maxk)) {
                $("#maxk_max_input_id").val(val_max_maxk)
                $("#maxk_max_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                var min_maxk = Number($("#maxk_min_input_id").val())
                var flag = false
                // Set input range for "max_maxk"
                // The value should be an integer larger than "min_maxk"
                if ($("#maxk_max_input_id").val() > 1) {
                    $("#maxk_max_input_id").val(Number(val_max_maxk))
                    flag = true
                    is_maxk_correct_flag = true
                } else {
                    $("#maxk_max_input_id").val(2)
                    $("#maxk_max_warning_id").show()
                    is_maxk_correct_flag = true
                }
                if (!Number.isInteger(min_maxk)) {
                    $("#maxk_min_warning_id").show()
                    is_maxk_correct_flag = false
                } else {
                    if (test_val_max_maxk <= min_maxk) {
                        $("#maxk_min_warning_id").show()
                        $("#maxk_max_warning_id").show()
                        is_maxk_correct_flag = false
                    } else {
                        $("#maxk_min_warning_id").hide()
                        $("#maxk_max_warning_id").hide()
                        is_maxk_correct_flag = true
                    }
                }
                if (flag) {
                    $("#maxk_max_warning_id").hide()
                }
            }
        })

        $("#maxk_step_input_id").change(function(){
            var val_step_maxk = $("#maxk_step_input_id").val()
            test_val_step_maxk = Number(val_step_maxk)
            if (!Number.isInteger(test_val_step_maxk)) {
                $("#maxk_step_input_id").val(val_step_maxk)
                $("#maxk_step_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                // Set input range for "step_maxk"
                // The value should be an integer larger than 0
                if ($("#maxk_step_input_id").val() < 1) {
                    $("#maxk_step_input_id").val(1)
                    $("#maxk_step_warning_id").show()
                    is_maxk_correct_flag = true
                } else {
                    $("#maxk_step_input_id").val(Number(val_step_maxk))
                    $("#maxk_step_warning_id").hide()
                    is_maxk_correct_flag = true
                }
            }
        })

        $("#maxk_choice_value_input_id").change(function() {
            var maxk_choice_string = $("#maxk_choice_value_input_id").val()
            maxk_choice_values = maxk_choice_string.split(",")

            is_maxk_correct_flag = true
            if (maxk_choice_values.length < 1 || maxk_choice_values == "") {
                is_maxk_correct_flag = false
            } else {
                for (let i = 0; i < maxk_choice_values.length; i++) {
                    if (!Number.isInteger(Number(maxk_choice_values[i]))) {
                        is_maxk_correct_flag = false
                        break
                    }
                }
            }

            if (is_maxk_correct_flag) {
                $("#maxk_choice_value_warning_id").hide()
            } else {
                $("#maxk_choice_value_warning_id").show()
            }
        })

        // Check context_window
        $("#context_window_min_input_id").change(function(){
            var val_min_context_window = $("#context_window_min_input_id").val()
            test_val_min_context_window = Number(val_min_context_window)
            if (!Number.isInteger(test_val_min_context_window)) {
                $("#context_window_min_input_id").val(val_min_context_window)
                $("#context_window_min_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                var max_context_window = Number($("#context_window_max_input_id").val())
                var flag = false
                // Set input range for "min_context_window"
                // The value should be an integer larger than 0
                if ($("#context_window_min_input_id").val() < 1) {
                    $("#context_window_min_input_id").val(1)
                    flag = true
                    is_context_window_correct_flag = true
                } else {
                    $("#context_window_min_input_id").val(Number(val_min_context_window))
                    $("#context_window_min_warning_id").hide()
                    is_context_window_correct_flag = true
                }
                if (!Number.isInteger(max_context_window)) {
                    $("#context_window_max_warning_id").show()
                    is_context_window_correct_flag = false
                } else {
                    if (test_val_min_context_window >= max_context_window) {
                        $("#context_window_min_warning_id").show()
                        $("#context_window_max_warning_id").show()
                        is_context_window_correct_flag = false
                    } else {
                        $("#context_window_min_warning_id").hide()
                        $("#context_window_max_warning_id").hide()
                        is_context_window_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#context_window_min_warning_id").show()
                }
            }
        })

        $("#context_window_max_input_id").change(function(){
            var val_max_context_window = $("#context_window_max_input_id").val()
            test_val_max_context_window = Number(val_max_context_window)
            if (!Number.isInteger(test_val_max_context_window)) {
                $("#context_window_max_input_id").val(val_max_context_window)
                $("#context_window_max_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                var min_context_window = Number($("#context_window_min_input_id").val())
                var flag = false
                // Set input range for "max_context_window"
                // The value should be an integer larger than "min_context_window"
                if ($("#context_window_max_input_id").val() > 1) {
                    $("#context_window_max_input_id").val(Number(val_max_context_window))
                    flag = true
                    is_context_window_correct_flag = true
                } else {
                    $("#context_window_max_input_id").val(2)
                    $("#context_window_max_warning_id").show()
                    is_context_window_correct_flag = true
                }
                if (!Number.isInteger(min_context_window)) {
                    $("#context_window_min_warning_id").show()
                    is_context_window_correct_flag = false
                } else {
                    if (test_val_max_context_window <= min_context_window) {
                        $("#context_window_min_warning_id").show()
                        $("#context_window_max_warning_id").show()
                        is_context_window_correct_flag = false
                    } else {
                        $("#context_window_min_warning_id").hide()
                        $("#context_window_max_warning_id").hide()
                        is_context_window_correct_flag = true
                    }
                }
                if (flag) {
                    $("#context_window_max_warning_id").hide()
                }
            }
        })

        $("#context_window_step_input_id").change(function(){
            var val_step_context_window = $("#context_window_step_input_id").val()
            test_val_step_context_window = Number(val_step_context_window)
            if (!Number.isInteger(test_val_step_context_window)) {
                $("#context_window_step_input_id").val(val_step_context_window)
                $("#context_window_step_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                // Set input range for "step_context_window"
                // The value should be an integer larger than 0
                if ($("#context_window_step_input_id").val() < 1) {
                    $("#context_window_step_input_id").val(1)
                    $("#context_window_step_warning_id").show()
                    is_context_window_correct_flag = true
                } else {
                    $("#context_window_step_input_id").val(Number(val_step_context_window))
                    $("#context_window_step_warning_id").hide()
                    is_context_window_correct_flag = true
                }
            }
        })

        $("#context_window_choice_value_input_id").change(function() {
            var context_window_choice_string = $("#context_window_choice_value_input_id").val()
            context_window_choice_values = context_window_choice_string.split(",")

            is_context_window_correct_flag = true
            if (context_window_choice_values.length < 1 || context_window_choice_values == "") {
                is_context_window_correct_flag = false
            } else {
                for (let i = 0; i < context_window_choice_values.length; i++) {
                    if (!Number.isInteger(Number(context_window_choice_values[i]))) {
                        is_context_window_correct_flag = false
                        break
                    }
                }
            }

            if (is_context_window_correct_flag) {
                $("#context_window_choice_value_warning_id").hide()
            } else {
                $("#context_window_choice_value_warning_id").show()
            }
        })

        // Check dropout
        $("#dropout_min_input_id").change(function(){
            var val_min_dropout = $("#dropout_min_input_id").val()
            if (!$.isNumeric(val_min_dropout)) {
                $("#dropout_min_input_id").val(val_min_dropout)
                $("#dropout_min_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                var max_dropout = Number($("#dropout_max_input_id").val())
                var flag = false
                // Set input range for "min_dropout"
                // The value should be a real number between 0 and 1
                if ($("#dropout_min_input_id").val() < 0) {
                    $("#dropout_min_input_id").val(0)
                    flag = true
                    is_dropout_correct_flag = true
                } else if ($("#dropout_min_input_id").val() > 1) {
                    $("#dropout_min_input_id").val(1)
                    flag = true
                    is_dropout_correct_flag = true
                } else {
                    $("#dropout_min_input_id").val(Number(val_min_dropout))
                    $("#dropout_min_warning_id").hide()
                    is_dropout_correct_flag = true
                }
                if (!$.isNumeric(max_dropout)) {
                    $("#dropout_max_warning_id").show()
                    is_dropout_correct_flag = false
                } else {
                    if (val_min_dropout >= max_dropout) {
                        $("#dropout_min_warning_id").show()
                        $("#dropout_max_warning_id").show()
                        is_dropout_correct_flag = false
                    } else {
                        $("#dropout_min_warning_id").hide()
                        $("#dropout_max_warning_id").hide()
                        is_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#dropout_min_warning_id").show()
                }
            }
        })

        $("#dropout_max_input_id").change(function(){
            var val_max_dropout = $("#dropout_max_input_id").val()
            if (!$.isNumeric(val_max_dropout)) {
                $("#dropout_max_input_id").val(val_max_dropout)
                $("#dropout_max_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                var min_dropout = Number($("#dropout_min_input_id").val())
                var flag = false
                // Set input range for "max_dropout"
                // The value should be a real number between 0 and 1
                if ($("#dropout_max_input_id").val() < 0) {
                    $("#dropout_max_input_id").val(0)
                    flag = true
                    is_dropout_correct_flag = true
                } else if ($("#dropout_max_input_id").val() > 1) {
                    $("#dropout_max_input_id").val(1)
                    flag = true
                    is_dropout_correct_flag = true
                } else {
                    $("#dropout_max_input_id").val(Number(val_max_dropout))
                    $("#dropout_max_warning_id").hide()
                    is_dropout_correct_flag = true
                }
                if (!$.isNumeric(min_dropout)) {
                    $("#dropout_min_warning_id").show()
                    is_dropout_correct_flag = false
                } else {
                    if (val_max_dropout <= min_dropout) {
                        $("#dropout_min_warning_id").show()
                        $("#dropout_max_warning_id").show()
                        is_dropout_correct_flag = false
                    } else {
                        $("#dropout_min_warning_id").hide()
                        $("#dropout_max_warning_id").hide()
                        is_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#dropout_max_warning_id").show()
                }
            }
        })

        $("#dropout_step_input_id").change(function(){
            var val_step_dropout = $("#dropout_step_input_id").val()
            if (!$.isNumeric(val_step_dropout)) {
                $("#dropout_step_input_id").val(val_step_dropout)
                $("#dropout_step_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                // Set input range for "step_dropout"
                // The value should be an integer larger than 0
                if ($("#dropout_step_input_id").val() < 0) {
                    $("#dropout_step_input_id").val(0)
                    $("#dropout_step_warning_id").show()
                    is_dropout_correct_flag = true
                } else {
                    $("#dropout_step_input_id").val(Number(val_step_dropout))
                    $("#dropout_step_warning_id").hide()
                    is_dropout_correct_flag = true
                }
            }
        })

        $("#dropout_choice_value_input_id").change(function() {
            var dropout_choice_string = $("#dropout_choice_value_input_id").val()
            dropout_choice_values = dropout_choice_string.split(",")

            is_dropout_correct_flag = true
            if (dropout_choice_values.length < 1 || dropout_choice_values == "") {
                is_dropout_correct_flag = false
            } else {
                for (let i = 0; i < dropout_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(dropout_choice_values[i]))) {
                        is_dropout_correct_flag = false
                        break
                    }
                }
            }

            if (is_dropout_correct_flag) {
                $("#dropout_choice_value_warning_id").hide()
            } else {
                $("#dropout_choice_value_warning_id").show()
            }
        })

        // Check node_dropout
        $("#node_dropout_min_input_id").change(function(){
            var val_min_node_dropout = $("#node_dropout_min_input_id").val()
            if (!$.isNumeric(val_min_node_dropout)) {
                $("#node_dropout_min_input_id").val(val_min_node_dropout)
                $("#node_dropout_min_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                var max_node_dropout = Number($("#node_dropout_max_input_id").val())
                var flag = false
                // Set input range for "min_node_dropout"
                // The value should be a real number between 0 and 1
                if ($("#node_dropout_min_input_id").val() < 0) {
                    $("#node_dropout_min_input_id").val(0)
                    flag = true
                    is_node_dropout_correct_flag = true
                } else if ($("#node_dropout_min_input_id").val() > 1) {
                    $("#node_dropout_min_input_id").val(1)
                    flag = true
                    is_node_dropout_correct_flag = true
                } else {
                    $("#node_dropout_min_input_id").val(Number(val_min_node_dropout))
                    $("#node_dropout_min_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
                if (!$.isNumeric(max_node_dropout)) {
                    $("#node_dropout_max_warning_id").show()
                    is_node_dropout_correct_flag = false
                } else {
                    if (val_min_node_dropout >= max_node_dropout) {
                        $("#node_dropout_min_warning_id").show()
                        $("#node_dropout_max_warning_id").show()
                        is_node_dropout_correct_flag = false
                    } else {
                        $("#node_dropout_min_warning_id").hide()
                        $("#node_dropout_max_warning_id").hide()
                        is_node_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#node_dropout_min_warning_id").show()
                }
            }
        })

        $("#node_dropout_max_input_id").change(function(){
            var val_max_node_dropout = $("#node_dropout_max_input_id").val()
            if (!$.isNumeric(val_max_node_dropout)) {
                $("#node_dropout_max_input_id").val(val_max_node_dropout)
                $("#node_dropout_max_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                var min_node_dropout = Number($("#node_dropout_min_input_id").val())
                var flag = false
                // Set input range for "max_node_dropout"
                // The value should be a real number between 0 and 1
                if ($("#node_dropout_max_input_id").val() < 0) {
                    $("#node_dropout_max_input_id").val(0)
                    flag = true
                    is_node_dropout_correct_flag = true
                } else if ($("#node_dropout_max_input_id").val() > 1) {
                    $("#node_dropout_max_input_id").val(1)
                    flag = true
                    is_node_dropout_correct_flag = true
                } else {
                    $("#node_dropout_max_input_id").val(Number(val_max_node_dropout))
                    $("#node_dropout_max_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
                if (!$.isNumeric(min_node_dropout)) {
                    $("#node_dropout_min_warning_id").show()
                    is_node_dropout_correct_flag = false
                } else {
                    if (val_max_node_dropout <= min_node_dropout) {
                        $("#node_dropout_min_warning_id").show()
                        $("#node_dropout_max_warning_id").show()
                        is_node_dropout_correct_flag = false
                    } else {
                        $("#node_dropout_min_warning_id").hide()
                        $("#node_dropout_max_warning_id").hide()
                        is_node_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#node_dropout_max_warning_id").show()
                }
            }
        })

        $("#node_dropout_step_input_id").change(function(){
            var val_step_node_dropout = $("#node_dropout_step_input_id").val()
            if (!$.isNumeric(val_step_node_dropout)) {
                $("#node_dropout_step_input_id").val(val_step_node_dropout)
                $("#node_dropout_step_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                // Set input range for "step_node_dropout"
                // The value should be an integer larger than 0
                if ($("#node_dropout_step_input_id").val() < 0) {
                    $("#node_dropout_step_input_id").val(0)
                    $("#node_dropout_step_warning_id").show()
                    is_node_dropout_correct_flag = true
                } else {
                    $("#node_dropout_step_input_id").val(Number(val_step_node_dropout))
                    $("#node_dropout_step_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
            }
        })

        $("#node_dropout_choice_value_input_id").change(function() {
            var node_dropout_choice_string = $("#node_dropout_choice_value_input_id").val()
            node_dropout_choice_values = node_dropout_choice_string.split(",")

            is_node_dropout_correct_flag = true
            if (node_dropout_choice_values.length < 1 || node_dropout_choice_values == "") {
                is_node_dropout_correct_flag = false
            } else {
                for (let i = 0; i < node_dropout_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(node_dropout_choice_values[i]))) {
                        is_node_dropout_correct_flag = false
                        break
                    }
                }
            }

            if (is_node_dropout_correct_flag) {
                $("#node_dropout_choice_value_warning_id").hide()
            } else {
                $("#node_dropout_choice_value_warning_id").show()
            }
        })

        // Check mess_dropout
        $("#mess_dropout_min_input_id").change(function(){
            var val_min_mess_dropout = $("#mess_dropout_min_input_id").val()
            if (!$.isNumeric(val_min_mess_dropout)) {
                $("#mess_dropout_min_input_id").val(val_min_mess_dropout)
                $("#mess_dropout_min_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                var max_mess_dropout = Number($("#mess_dropout_max_input_id").val())
                var flag = false
                // Set input range for "min_mess_dropout"
                // The value should be a real number between 0 and 1
                if ($("#mess_dropout_min_input_id").val() < 0) {
                    $("#mess_dropout_min_input_id").val(0)
                    flag = true
                    is_mess_dropout_correct_flag = true
                } else if ($("#mess_dropout_min_input_id").val() > 1) {
                    $("#mess_dropout_min_input_id").val(1)
                    flag = true
                    is_mess_dropout_correct_flag = true
                } else {
                    $("#mess_dropout_min_input_id").val(Number(val_min_mess_dropout))
                    $("#mess_dropout_min_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
                if (!$.isNumeric(max_mess_dropout)) {
                    $("#mess_dropout_max_warning_id").show()
                    is_mess_dropout_correct_flag = false
                } else {
                    if (val_min_mess_dropout >= max_mess_dropout) {
                        $("#mess_dropout_min_warning_id").show()
                        $("#mess_dropout_max_warning_id").show()
                        is_mess_dropout_correct_flag = false
                    } else {
                        $("#mess_dropout_min_warning_id").hide()
                        $("#mess_dropout_max_warning_id").hide()
                        is_mess_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#mess_dropout_min_warning_id").show()
                }
            }
        })

        $("#mess_dropout_max_input_id").change(function(){
            var val_max_mess_dropout = $("#mess_dropout_max_input_id").val()
            if (!$.isNumeric(val_max_mess_dropout)) {
                $("#mess_dropout_max_input_id").val(val_max_mess_dropout)
                $("#mess_dropout_max_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                var min_mess_dropout = Number($("#mess_dropout_min_input_id").val())
                var flag = false
                // Set input range for "max_mess_dropout"
                // The value should be a real number between 0 and 1
                if ($("#mess_dropout_max_input_id").val() < 0) {
                    $("#mess_dropout_max_input_id").val(0)
                    flag = true
                    is_mess_dropout_correct_flag = true
                } else if ($("#mess_dropout_max_input_id").val() > 1) {
                    $("#mess_dropout_max_input_id").val(1)
                    flag = true
                    is_mess_dropout_correct_flag = true
                } else {
                    $("#mess_dropout_max_input_id").val(Number(val_max_mess_dropout))
                    $("#mess_dropout_max_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
                if (!$.isNumeric(min_mess_dropout)) {
                    $("#mess_dropout_min_warning_id").show()
                    is_mess_dropout_correct_flag = false
                } else {
                    if (val_max_mess_dropout <= min_mess_dropout) {
                        $("#mess_dropout_min_warning_id").show()
                        $("#mess_dropout_max_warning_id").show()
                        is_mess_dropout_correct_flag = false
                    } else {
                        $("#mess_dropout_min_warning_id").hide()
                        $("#mess_dropout_max_warning_id").hide()
                        is_mess_dropout_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#mess_dropout_max_warning_id").show()
                }
            }
        })

        $("#mess_dropout_step_input_id").change(function(){
            var val_step_mess_dropout = $("#mess_dropout_step_input_id").val()
            if (!$.isNumeric(val_step_mess_dropout)) {
                $("#mess_dropout_step_input_id").val(val_step_mess_dropout)
                $("#mess_dropout_step_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                // Set input range for "step_mess_dropout"
                // The value should be an integer larger than 0
                if ($("#mess_dropout_step_input_id").val() < 0) {
                    $("#mess_dropout_step_input_id").val(0)
                    $("#mess_dropout_step_warning_id").show()
                    is_mess_dropout_correct_flag = true
                } else {
                    $("#mess_dropout_step_input_id").val(Number(val_step_mess_dropout))
                    $("#mess_dropout_step_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
            }
        })

        $("#mess_dropout_choice_value_input_id").change(function() {
            var mess_dropout_choice_string = $("#mess_dropout_choice_value_input_id").val()
            mess_dropout_choice_values = mess_dropout_choice_string.split(",")

            is_mess_dropout_correct_flag = true
            if (mess_dropout_choice_values.length < 1 || mess_dropout_choice_values == "") {
                is_mess_dropout_correct_flag = false
            } else {
                for (let i = 0; i < mess_dropout_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(mess_dropout_choice_values[i]))) {
                        is_mess_dropout_correct_flag = false
                        break
                    }
                }
            }

            if (is_mess_dropout_correct_flag) {
                $("#mess_dropout_choice_value_warning_id").hide()
            } else {
                $("#mess_dropout_choice_value_warning_id").show()
            }
        })

        // Check lr
        $("#lr_min_input_id").change(function(){
            var val_min_lr = $("#lr_min_input_id").val()
            if (!$.isNumeric(val_min_lr)) {
                $("#lr_min_input_id").val(val_min_lr)
                $("#lr_min_warning_id").show()
                is_lr_correct_flag = false
            } else {
                var max_lr = Number($("#lr_max_input_id").val())
                var flag = false
                // Set input range for "min_lr"
                // The value should be a real number larger than 0
                if ($("#lr_min_input_id").val() < 0) {
                    $("#lr_min_input_id").val(0)
                    flag = true
                    is_lr_correct_flag = true
                } else {
                    $("#lr_min_input_id").val(Number(val_min_lr))
                    $("#lr_min_warning_id").hide()
                    is_lr_correct_flag = true
                }
                if (!$.isNumeric(max_lr)) {
                    $("#lr_max_warning_id").show()
                    is_lr_correct_flag = false
                } else {
                    if (val_min_lr >= max_lr) {
                        $("#lr_min_warning_id").show()
                        $("#lr_max_warning_id").show()
                        is_lr_correct_flag = false
                    } else {
                        $("#lr_min_warning_id").hide()
                        $("#lr_max_warning_id").hide()
                        is_lr_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#lr_min_warning_id").show()
                }
            }
        })

        $("#lr_max_input_id").change(function(){
            var val_max_lr = $("#lr_max_input_id").val()
            if (!$.isNumeric(val_max_lr)) {
                $("#lr_max_input_id").val(val_max_lr)
                $("#lr_max_warning_id").show()
                is_lr_correct_flag = false
            } else {
                var min_lr = Number($("#lr_min_input_id").val())
                var flag = false
                // Set input range for "max_lr"
                // The value should be a real number larger than 0
                if ($("#lr_max_input_id").val() < 0) {
                    $("#lr_max_input_id").val(0)
                    flag = true
                    is_lr_correct_flag = true
                } else {
                    $("#lr_max_input_id").val(Number(val_max_lr))
                    $("#lr_max_warning_id").hide()
                    is_lr_correct_flag = true
                }
                if (!$.isNumeric(min_lr)) {
                    $("#lr_min_warning_id").show()
                    is_lr_correct_flag = false
                } else {
                    if (val_max_lr <= min_lr) {
                        $("#lr_min_warning_id").show()
                        $("#lr_max_warning_id").show()
                        is_lr_correct_flag = false
                    } else {
                        $("#lr_min_warning_id").hide()
                        $("#lr_max_warning_id").hide()
                        is_lr_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#lr_max_warning_id").show()
                }
            }
        })

        $("#lr_step_input_id").change(function(){
            var val_step_lr = $("#lr_step_input_id").val()
            if (!$.isNumeric(val_step_lr)) {
                $("#lr_step_input_id").val(val_step_lr)
                $("#lr_step_warning_id").show()
                is_lr_correct_flag = false
            } else {
                // Set input range for "step_lr"
                // The value should be an integer larger than 0
                if ($("#lr_step_input_id").val() < 0) {
                    $("#lr_step_input_id").val(0)
                    $("#lr_step_warning_id").show()
                    is_lr_correct_flag = true
                } else {
                    $("#lr_step_input_id").val(Number(val_step_lr))
                    $("#lr_step_warning_id").hide()
                    is_lr_correct_flag = true
                }
            }
        })

        $("#lr_choice_value_input_id").change(function() {
            var lr_choice_string = $("#lr_choice_value_input_id").val()
            lr_choice_values = lr_choice_string.split(",")

            is_lr_correct_flag = true
            if (lr_choice_values.length < 1 || lr_choice_values == "") {
                is_lr_correct_flag = false
            } else {
                for (let i = 0; i < lr_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(lr_choice_values[i]))) {
                        is_lr_correct_flag = false
                        break
                    }
                }
            }

            if (is_lr_correct_flag) {
                $("#lr_choice_value_warning_id").hide()
            } else {
                $("#lr_choice_value_warning_id").show()
            }
        })

        // Check anneal_cap
        $("#anneal_cap_min_input_id").change(function(){
            var val_min_anneal_cap = $("#anneal_cap_min_input_id").val()
            if (!$.isNumeric(val_min_anneal_cap)) {
                $("#anneal_cap_min_input_id").val(val_min_anneal_cap)
                $("#anneal_cap_min_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                var max_anneal_cap = Number($("#anneal_cap_max_input_id").val())
                var flag = false
                // Set input range for "min_anneal_cap"
                // The value should be a real number larger than 0
                if ($("#anneal_cap_min_input_id").val() < 0) {
                    $("#anneal_cap_min_input_id").val(0)
                    flag = true
                    is_anneal_cap_correct_flag = true
                } else {
                    $("#anneal_cap_min_input_id").val(Number(val_min_anneal_cap))
                    $("#anneal_cap_min_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
                if (!$.isNumeric(max_anneal_cap)) {
                    $("#anneal_cap_max_warning_id").show()
                    is_anneal_cap_correct_flag = false
                } else {
                    if (val_min_anneal_cap >= max_anneal_cap) {
                        $("#anneal_cap_min_warning_id").show()
                        $("#anneal_cap_max_warning_id").show()
                        is_anneal_cap_correct_flag = false
                    } else {
                        $("#anneal_cap_min_warning_id").hide()
                        $("#anneal_cap_max_warning_id").hide()
                        is_anneal_cap_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#anneal_cap_min_warning_id").show()
                }
            }
        })

        $("#anneal_cap_max_input_id").change(function(){
            var val_max_anneal_cap = $("#anneal_cap_max_input_id").val()
            if (!$.isNumeric(val_max_anneal_cap)) {
                $("#anneal_cap_max_input_id").val(val_max_anneal_cap)
                $("#anneal_cap_max_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                var min_anneal_cap = Number($("#anneal_cap_min_input_id").val())
                var flag = false
                // Set input range for "max_anneal_cap"
                // The value should be a real number larger than 0
                if ($("#anneal_cap_max_input_id").val() < 0) {
                    $("#anneal_cap_max_input_id").val(0)
                    flag = true
                    is_anneal_cap_correct_flag = true
                } else {
                    $("#anneal_cap_max_input_id").val(Number(val_max_anneal_cap))
                    $("#anneal_cap_max_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
                if (!$.isNumeric(min_anneal_cap)) {
                    $("#anneal_cap_min_warning_id").show()
                    is_anneal_cap_correct_flag = false
                } else {
                    if (val_max_anneal_cap <= min_anneal_cap) {
                        $("#anneal_cap_min_warning_id").show()
                        $("#anneal_cap_max_warning_id").show()
                        is_anneal_cap_correct_flag = false
                    } else {
                        $("#anneal_cap_min_warning_id").hide()
                        $("#anneal_cap_max_warning_id").hide()
                        is_anneal_cap_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#anneal_cap_max_warning_id").show()
                }
            }
        })

        $("#anneal_cap_step_input_id").change(function(){
            var val_step_anneal_cap = $("#anneal_cap_step_input_id").val()
            if (!$.isNumeric(val_step_anneal_cap)) {
                $("#anneal_cap_step_input_id").val(val_step_anneal_cap)
                $("#anneal_cap_step_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                // Set input range for "step_anneal_cap"
                // The value should be an integer larger than 0
                if ($("#anneal_cap_step_input_id").val() < 0) {
                    $("#anneal_cap_step_input_id").val(0)
                    $("#anneal_cap_step_warning_id").show()
                    is_anneal_cap_correct_flag = true
                } else {
                    $("#anneal_cap_step_input_id").val(Number(val_step_anneal_cap))
                    $("#anneal_cap_step_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
            }
        })

        $("#anneal_cap_choice_value_input_id").change(function() {
            var anneal_cap_choice_string = $("#anneal_cap_choice_value_input_id").val()
            anneal_cap_choice_values = anneal_cap_choice_string.split(",")

            is_anneal_cap_correct_flag = true
            if (anneal_cap_choice_values.length < 1 || anneal_cap_choice_values == "") {
                is_anneal_cap_correct_flag = false
            } else {
                for (let i = 0; i < anneal_cap_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(anneal_cap_choice_values[i]))) {
                        is_anneal_cap_correct_flag = false
                        break
                    }
                }
            }

            if (is_anneal_cap_correct_flag) {
                $("#anneal_cap_choice_value_warning_id").hide()
            } else {
                $("#anneal_cap_choice_value_warning_id").show()
            }
        })

        // Check reg_1
        $("#reg1_min_input_id").change(function(){
            var val_min_reg1 = $("#reg1_min_input_id").val()
            if (!$.isNumeric(val_min_reg1)) {
                $("#reg1_min_input_id").val(val_min_reg1)
                $("#reg1_min_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                var max_reg1 = Number($("#reg1_max_input_id").val())
                var flag = false
                // Set input range for "min_reg1"
                // The value should be a real number larger than 0
                if ($("#reg1_min_input_id").val() < 0) {
                    $("#reg1_min_input_id").val(0)
                    flag = true
                    is_reg1_correct_flag = true
                } else {
                    $("#reg1_min_input_id").val(Number(val_min_reg1))
                    $("#reg1_min_warning_id").hide()
                    is_reg1_correct_flag = true
                }
                if (!$.isNumeric(max_reg1)) {
                    $("#reg1_max_warning_id").show()
                    is_reg1_correct_flag = false
                } else {
                    if (val_min_reg1 >= max_reg1) {
                        $("#reg1_min_warning_id").show()
                        $("#reg1_max_warning_id").show()
                        is_reg1_correct_flag = false
                    } else {
                        $("#reg1_min_warning_id").hide()
                        $("#reg1_max_warning_id").hide()
                        is_reg1_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#reg1_min_warning_id").show()
                }
            }
        })

        $("#reg1_max_input_id").change(function(){
            var val_max_reg1 = $("#reg1_max_input_id").val()
            if (!$.isNumeric(val_max_reg1)) {
                $("#reg1_max_input_id").val(val_max_reg1)
                $("#reg1_max_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                var min_reg1 = Number($("#reg1_min_input_id").val())
                var flag = false
                // Set input range for "max_reg1"
                // The value should be a real number larger than 0
                if ($("#reg1_max_input_id").val() < 0) {
                    $("#reg1_max_input_id").val(0)
                    flag = true
                    is_reg1_correct_flag = true
                } else {
                    $("#reg1_max_input_id").val(Number(val_max_reg1))
                    $("#reg1_max_warning_id").hide()
                    is_reg1_correct_flag = true
                }
                if (!$.isNumeric(min_reg1)) {
                    $("#reg1_min_warning_id").show()
                    is_reg1_correct_flag = false
                } else {
                    if (val_max_reg1 <= min_reg1) {
                        $("#reg1_min_warning_id").show()
                        $("#reg1_max_warning_id").show()
                        is_reg1_correct_flag = false
                    } else {
                        $("#reg1_min_warning_id").hide()
                        $("#reg1_max_warning_id").hide()
                        is_reg1_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#reg1_max_warning_id").show()
                }
            }
        })

        $("#reg1_step_input_id").change(function(){
            var val_step_reg1 = $("#reg1_step_input_id").val()
            if (!$.isNumeric(val_step_reg1)) {
                $("#reg1_step_input_id").val(val_step_reg1)
                $("#reg1_step_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                // Set input range for "step_reg1"
                // The value should be an integer larger than 0
                if ($("#reg1_step_input_id").val() < 0) {
                    $("#reg1_step_input_id").val(0)
                    $("#reg1_step_warning_id").show()
                    is_reg1_correct_flag = true
                } else {
                    $("#reg1_step_input_id").val(Number(val_step_reg1))
                    $("#reg1_step_warning_id").hide()
                    is_reg1_correct_flag = true
                }
            }
        })

        $("#reg1_choice_value_input_id").change(function() {
            var reg1_choice_string = $("#reg1_choice_value_input_id").val()
            reg1_choice_values = reg1_choice_string.split(",")

            is_reg1_correct_flag = true
            if (reg1_choice_values.length < 1 || reg1_choice_values == "") {
                is_reg1_correct_flag = false
            } else {
                for (let i = 0; i < reg1_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(reg1_choice_values[i]))) {
                        is_reg1_correct_flag = false
                        break
                    }
                }
            }

            if (is_reg1_correct_flag) {
                $("#reg1_choice_value_warning_id").hide()
            } else {
                $("#reg1_choice_value_warning_id").show()
            }
        })

        // Check reg_2
        $("#reg2_min_input_id").change(function(){
            var val_min_reg2 = $("#reg2_min_input_id").val()
            if (!$.isNumeric(val_min_reg2)) {
                $("#reg2_min_input_id").val(val_min_reg2)
                $("#reg2_min_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                var max_reg2 = Number($("#reg2_max_input_id").val())
                var flag = false
                // Set input range for "min_reg2"
                // The value should be a real number larger than 0
                if ($("#reg2_min_input_id").val() < 0) {
                    $("#reg2_min_input_id").val(0)
                    flag = true
                    is_reg2_correct_flag = true
                } else {
                    $("#reg2_min_input_id").val(Number(val_min_reg2))
                    $("#reg2_min_warning_id").hide()
                    is_reg2_correct_flag = true
                }
                if (!$.isNumeric(max_reg2)) {
                    $("#reg2_max_warning_id").show()
                    is_reg2_correct_flag = false
                } else {
                    if (val_min_reg2 >= max_reg2) {
                        $("#reg2_min_warning_id").show()
                        $("#reg2_max_warning_id").show()
                        is_reg2_correct_flag = false
                    } else {
                        $("#reg2_min_warning_id").hide()
                        $("#reg2_max_warning_id").hide()
                        is_reg2_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#reg2_min_warning_id").show()
                }
            }
        })

        $("#reg2_max_input_id").change(function(){
            var val_max_reg2 = $("#reg2_max_input_id").val()
            if (!$.isNumeric(val_max_reg2)) {
                $("#reg2_max_input_id").val(val_max_reg2)
                $("#reg2_max_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                var min_reg2 = Number($("#reg2_min_input_id").val())
                var flag = false
                // Set input range for "max_reg2"
                // The value should be a real number larger than 0
                if ($("#reg2_max_input_id").val() < 0) {
                    $("#reg2_max_input_id").val(0)
                    flag = true
                    is_reg2_correct_flag = true
                } else {
                    $("#reg2_max_input_id").val(Number(val_max_reg2))
                    $("#reg2_max_warning_id").hide()
                    is_reg2_correct_flag = true
                }
                if (!$.isNumeric(min_reg2)) {
                    $("#reg2_min_warning_id").show()
                    is_reg2_correct_flag = false
                } else {
                    if (val_max_reg2 <= min_reg2) {
                        $("#reg2_min_warning_id").show()
                        $("#reg2_max_warning_id").show()
                        is_reg2_correct_flag = false
                    } else {
                        $("#reg2_min_warning_id").hide()
                        $("#reg2_max_warning_id").hide()
                        is_reg2_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#reg2_max_warning_id").show()
                }
            }
        })

        $("#reg2_step_input_id").change(function(){
            var val_step_reg2 = $("#reg2_step_input_id").val()
            if (!$.isNumeric(val_step_reg2)) {
                $("#reg2_step_input_id").val(val_step_reg2)
                $("#reg2_step_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                // Set input range for "step_reg2"
                // The value should be an integer larger than 0
                if ($("#reg2_step_input_id").val() < 0) {
                    $("#reg2_step_input_id").val(0)
                    $("#reg2_step_warning_id").show()
                    is_reg2_correct_flag = true
                } else {
                    $("#reg2_step_input_id").val(Number(val_step_reg2))
                    $("#reg2_step_warning_id").hide()
                    is_reg2_correct_flag = true
                }
            }
        })

        $("#reg2_choice_value_input_id").change(function() {
            var reg2_choice_string = $("#reg2_choice_value_input_id").val()
            reg2_choice_values = reg2_choice_string.split(",")

            is_reg2_correct_flag = true
            if (reg2_choice_values.length < 1 || reg2_choice_values == "") {
                is_reg2_correct_flag = false
            } else {
                for (let i = 0; i < reg2_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(reg2_choice_values[i]))) {
                        is_reg2_correct_flag = false
                        break
                    }
                }
            }

            if (is_reg2_correct_flag) {
                $("#reg2_choice_value_warning_id").hide()
            } else {
                $("#reg2_choice_value_warning_id").show()
            }
        })

        // Check alpha
        $("#alpha_min_input_id").change(function(){
            var val_min_alpha = $("#alpha_min_input_id").val()
            if (!$.isNumeric(val_min_alpha)) {
                $("#alpha_min_input_id").val(val_min_alpha)
                $("#alpha_min_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                var max_alpha = Number($("#alpha_max_input_id").val())
                var flag = false
                // Set input range for "min_alpha"
                // The value should be a real number larger than 0
                if ($("#alpha_min_input_id").val() < 0) {
                    $("#alpha_min_input_id").val(0)
                    flag = true
                    is_alpha_correct_flag = true
                } else {
                    $("#alpha_min_input_id").val(Number(val_min_alpha))
                    $("#alpha_min_warning_id").hide()
                    is_alpha_correct_flag = true
                }
                if (!$.isNumeric(max_alpha)) {
                    $("#alpha_max_warning_id").show()
                    is_alpha_correct_flag = false
                } else {
                    if (val_min_alpha >= max_alpha) {
                        $("#alpha_min_warning_id").show()
                        $("#alpha_max_warning_id").show()
                        is_alpha_correct_flag = false
                    } else {
                        $("#alpha_min_warning_id").hide()
                        $("#alpha_max_warning_id").hide()
                        is_alpha_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#alpha_min_warning_id").show()
                }
            }
        })

        $("#alpha_max_input_id").change(function(){
            var val_max_alpha = $("#alpha_max_input_id").val()
            if (!$.isNumeric(val_max_alpha)) {
                $("#alpha_max_input_id").val(val_max_alpha)
                $("#alpha_max_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                var min_alpha = Number($("#alpha_min_input_id").val())
                var flag = false
                // Set input range for "max_alpha"
                // The value should be a real number larger than 0
                if ($("#alpha_max_input_id").val() < 0) {
                    $("#alpha_max_input_id").val(0)
                    flag = true
                    is_alpha_correct_flag = true
                } else {
                    $("#alpha_max_input_id").val(Number(val_max_alpha))
                    $("#alpha_max_warning_id").hide()
                    is_alpha_correct_flag = true
                }
                if (!$.isNumeric(min_alpha)) {
                    $("#alpha_min_warning_id").show()
                    is_alpha_correct_flag = false
                } else {
                    if (val_max_alpha <= min_alpha) {
                        $("#alpha_min_warning_id").show()
                        $("#alpha_max_warning_id").show()
                        is_alpha_correct_flag = false
                    } else {
                        $("#alpha_min_warning_id").hide()
                        $("#alpha_max_warning_id").hide()
                        is_alpha_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#alpha_max_warning_id").show()
                }
            }
        })

        $("#alpha_step_input_id").change(function(){
            var val_step_alpha = $("#alpha_step_input_id").val()
            if (!$.isNumeric(val_step_alpha)) {
                $("#alpha_step_input_id").val(val_step_alpha)
                $("#alpha_step_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                // Set input range for "step_alpha"
                // The value should be an integer larger than 0
                if ($("#alpha_step_input_id").val() < 0) {
                    $("#alpha_step_input_id").val(0)
                    $("#alpha_step_warning_id").show()
                    is_alpha_correct_flag = true
                } else {
                    $("#alpha_step_input_id").val(Number(val_step_alpha))
                    $("#alpha_step_warning_id").hide()
                    is_alpha_correct_flag = true
                }
            }
        })

        $("#alpha_choice_value_input_id").change(function() {
            var alpha_choice_string = $("#alpha_choice_value_input_id").val()
            alpha_choice_values = alpha_choice_string.split(",")

            is_alpha_correct_flag = true
            if (alpha_choice_values.length < 1 || alpha_choice_values == "") {
                is_alpha_correct_flag = false
            } else {
                for (let i = 0; i < alpha_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(alpha_choice_values[i]))) {
                        is_alpha_correct_flag = false
                        break
                    }
                }
            }

            if (is_alpha_correct_flag) {
                $("#alpha_choice_value_warning_id").hide()
            } else {
                $("#alpha_choice_value_warning_id").show()
            }
        })

        // Check elastic
        $("#elastic_min_input_id").change(function(){
            var val_min_elastic = $("#elastic_min_input_id").val()
            if (!$.isNumeric(val_min_elastic)) {
                $("#elastic_min_input_id").val(val_min_elastic)
                $("#elastic_min_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                var max_elastic = Number($("#elastic_max_input_id").val())
                var flag = false
                // Set input range for "min_elastic"
                // The value should be a real number larger than 0
                if ($("#elastic_min_input_id").val() < 0) {
                    $("#elastic_min_input_id").val(0)
                    flag = true
                    is_elastic_correct_flag = true
                } else {
                    $("#elastic_min_input_id").val(Number(val_min_elastic))
                    $("#elastic_min_warning_id").hide()
                    is_elastic_correct_flag = true
                }
                if (!$.isNumeric(max_elastic)) {
                    $("#elastic_max_warning_id").show()
                    is_elastic_correct_flag = false
                } else {
                    if (val_min_elastic >= max_elastic) {
                        $("#elastic_min_warning_id").show()
                        $("#elastic_max_warning_id").show()
                        is_elastic_correct_flag = false
                    } else {
                        $("#elastic_min_warning_id").hide()
                        $("#elastic_max_warning_id").hide()
                        is_elastic_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#elastic_min_warning_id").show()
                }
            }
        })

        $("#elastic_max_input_id").change(function(){
            var val_max_elastic = $("#elastic_max_input_id").val()
            if (!$.isNumeric(val_max_elastic)) {
                $("#elastic_max_input_id").val(val_max_elastic)
                $("#elastic_max_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                var min_elastic = Number($("#elastic_min_input_id").val())
                var flag = false
                // Set input range for "max_elastic"
                // The value should be a real number larger than 0
                if ($("#elastic_max_input_id").val() < 0) {
                    $("#elastic_max_input_id").val(0)
                    flag = true
                    is_elastic_correct_flag = true
                } else {
                    $("#elastic_max_input_id").val(Number(val_max_elastic))
                    $("#elastic_max_warning_id").hide()
                    is_elastic_correct_flag = true
                }
                if (!$.isNumeric(min_elastic)) {
                    $("#elastic_min_warning_id").show()
                    is_elastic_correct_flag = false
                } else {
                    if (val_max_elastic <= min_elastic) {
                        $("#elastic_min_warning_id").show()
                        $("#elastic_max_warning_id").show()
                        is_elastic_correct_flag = false
                    } else {
                        $("#elastic_min_warning_id").hide()
                        $("#elastic_max_warning_id").hide()
                        is_elastic_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#elastic_max_warning_id").show()
                }
            }
        })

        $("#elastic_step_input_id").change(function(){
            var val_step_elastic = $("#elastic_step_input_id").val()
            if (!$.isNumeric(val_step_elastic)) {
                $("#elastic_step_input_id").val(val_step_elastic)
                $("#elastic_step_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                // Set input range for "step_elastic"
                // The value should be an integer larger than 0
                if ($("#elastic_step_input_id").val() < 0) {
                    $("#elastic_step_input_id").val(0)
                    $("#elastic_step_warning_id").show()
                    is_elastic_correct_flag = true
                } else {
                    $("#elastic_step_input_id").val(Number(val_step_elastic))
                    $("#elastic_step_warning_id").hide()
                    is_elastic_correct_flag = true
                }
            }
        })

        $("#elastic_choice_value_input_id").change(function() {
            var elastic_choice_string = $("#elastic_choice_value_input_id").val()
            elastic_choice_values = elastic_choice_string.split(",")

            is_elastic_correct_flag = true
            if (elastic_choice_values.length < 1 || elastic_choice_values == "") {
                is_elastic_correct_flag = false
            } else {
                for (let i = 0; i < elastic_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(elastic_choice_values[i]))) {
                        is_elastic_correct_flag = false
                        break
                    }
                }
            }

            if (is_elastic_correct_flag) {
                $("#elastic_choice_value_warning_id").hide()
            } else {
                $("#elastic_choice_value_warning_id").show()
            }
        })

        // Check rho
        $("#rho_min_input_id").change(function(){
            var val_min_rho = $("#rho_min_input_id").val()
            if (!$.isNumeric(val_min_rho)) {
                $("#rho_min_input_id").val(val_min_rho)
                $("#rho_min_warning_id").show()
                is_rho_correct_flag = false
            } else {
                var max_rho = Number($("#rho_max_input_id").val())
                var flag = false
                // Set input range for "min_rho"
                // The value should be a real number larger than 0
                if ($("#rho_min_input_id").val() < 0) {
                    $("#rho_min_input_id").val(0)
                    flag = true
                    is_rho_correct_flag = true
                } else {
                    $("#rho_min_input_id").val(Number(val_min_rho))
                    $("#rho_min_warning_id").hide()
                    is_rho_correct_flag = true
                }
                if (!$.isNumeric(max_rho)) {
                    $("#rho_max_warning_id").show()
                    is_rho_correct_flag = false
                } else {
                    if (val_min_rho >= max_rho) {
                        $("#rho_min_warning_id").show()
                        $("#rho_max_warning_id").show()
                        is_rho_correct_flag = false
                    } else {
                        $("#rho_min_warning_id").hide()
                        $("#rho_max_warning_id").hide()
                        is_rho_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#rho_min_warning_id").show()
                }
            }
        })

        $("#rho_max_input_id").change(function(){
            var val_max_rho = $("#rho_max_input_id").val()
            if (!$.isNumeric(val_max_rho)) {
                $("#rho_max_input_id").val(val_max_rho)
                $("#rho_max_warning_id").show()
                is_rho_correct_flag = false
            } else {
                var min_rho = Number($("#rho_min_input_id").val())
                var flag = false
                // Set input range for "max_rho"
                // The value should be a real number larger than 0
                if ($("#rho_max_input_id").val() < 0) {
                    $("#rho_max_input_id").val(0)
                    flag = true
                    is_rho_correct_flag = true
                } else {
                    $("#rho_max_input_id").val(Number(val_max_rho))
                    $("#rho_max_warning_id").hide()
                    is_rho_correct_flag = true
                }
                if (!$.isNumeric(min_rho)) {
                    $("#rho_min_warning_id").show()
                    is_rho_correct_flag = false
                } else {
                    if (val_max_rho <= min_rho) {
                        $("#rho_min_warning_id").show()
                        $("#rho_max_warning_id").show()
                        is_rho_correct_flag = false
                    } else {
                        $("#rho_min_warning_id").hide()
                        $("#rho_max_warning_id").hide()
                        is_rho_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#rho_max_warning_id").show()
                }
            }
        })

        $("#rho_step_input_id").change(function(){
            var val_step_rho = $("#rho_step_input_id").val()
            if (!$.isNumeric(val_step_rho)) {
                $("#rho_step_input_id").val(val_step_rho)
                $("#rho_step_warning_id").show()
                is_rho_correct_flag = false
            } else {
                // Set input range for "step_rho"
                // The value should be an integer larger than 0
                if ($("#rho_step_input_id").val() < 0) {
                    $("#rho_step_input_id").val(0)
                    $("#rho_step_warning_id").show()
                    is_rho_correct_flag = true
                } else {
                    $("#rho_step_input_id").val(Number(val_step_rho))
                    $("#rho_step_warning_id").hide()
                    is_rho_correct_flag = true
                }
            }
        })

        $("#rho_choice_value_input_id").change(function() {
            var rho_choice_string = $("#rho_choice_value_input_id").val()
            rho_choice_values = rho_choice_string.split(",")

            is_rho_correct_flag = true
            if (rho_choice_values.length < 1 || rho_choice_values == "") {
                is_rho_correct_flag = false
            } else {
                for (let i = 0; i < rho_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(rho_choice_values[i]))) {
                        is_rho_correct_flag = false
                        break
                    }
                }
            }

            if (is_rho_correct_flag) {
                $("#rho_choice_value_warning_id").hide()
            } else {
                $("#rho_choice_value_warning_id").show()
            }
        })

        // Check reg
        $("#reg_min_input_id").change(function(){
            var val_min_reg = $("#reg_min_input_id").val()
            if (!$.isNumeric(val_min_reg)) {
                $("#reg_min_input_id").val(val_min_reg)
                $("#reg_min_warning_id").show()
                is_reg_correct_flag = false
            } else {
                var max_reg = Number($("#reg_max_input_id").val())
                var flag = false
                // Set input range for "min_reg"
                // The value should be a real number larger than 0
                if ($("#reg_min_input_id").val() < 0) {
                    $("#reg_min_input_id").val(0)
                    flag = true
                    is_reg_correct_flag = true
                } else {
                    $("#reg_min_input_id").val(Number(val_min_reg))
                    $("#reg_min_warning_id").hide()
                    is_reg_correct_flag = true
                }
                if (!$.isNumeric(max_reg)) {
                    $("#reg_max_warning_id").show()
                    is_reg_correct_flag = false
                } else {
                    if (val_min_reg >= max_reg) {
                        $("#reg_min_warning_id").show()
                        $("#reg_max_warning_id").show()
                        is_reg_correct_flag = false
                    } else {
                        $("#reg_min_warning_id").hide()
                        $("#reg_max_warning_id").hide()
                        is_reg_correct_flag = true
                    }
                } 
                if (flag) {
                    $("#reg_min_warning_id").show()
                }
            }
        })

        $("#reg_max_input_id").change(function(){
            var val_max_reg = $("#reg_max_input_id").val()
            if (!$.isNumeric(val_max_reg)) {
                $("#reg_max_input_id").val(val_max_reg)
                $("#reg_max_warning_id").show()
                is_reg_correct_flag = false
            } else {
                var min_reg = Number($("#reg_min_input_id").val())
                var flag = false
                // Set input range for "max_reg"
                // The value should be a real number larger than 0
                if ($("#reg_max_input_id").val() < 0) {
                    $("#reg_max_input_id").val(0)
                    flag = true
                    is_reg_correct_flag = true
                } else {
                    $("#reg_max_input_id").val(Number(val_max_reg))
                    $("#reg_max_warning_id").hide()
                    is_reg_correct_flag = true
                }
                if (!$.isNumeric(min_reg)) {
                    $("#reg_min_warning_id").show()
                    is_reg_correct_flag = false
                } else {
                    if (val_max_reg <= min_reg) {
                        $("#reg_min_warning_id").show()
                        $("#reg_max_warning_id").show()
                        is_reg_correct_flag = false
                    } else {
                        $("#reg_min_warning_id").hide()
                        $("#reg_max_warning_id").hide()
                        is_reg_correct_flag = true
                    }
                }
                if (flag) {
                    $("#reg_max_warning_id").show()
                }
            }
        })

        $("#reg_step_input_id").change(function(){
            var val_step_reg = $("#reg_step_input_id").val()
            if (!$.isNumeric(val_step_reg)) {
                $("#reg_step_input_id").val(val_step_reg)
                $("#reg_step_warning_id").show()
                is_reg_correct_flag = false
            } else {
                // Set input range for "step_reg"
                // The value should be an integer larger than 0
                if ($("#reg_step_input_id").val() < 0) {
                    $("#reg_step_input_id").val(0)
                    $("#reg_step_warning_id").show()
                    is_reg_correct_flag = true
                } else {
                    $("#reg_step_input_id").val(Number(val_step_reg))
                    $("#reg_step_warning_id").hide()
                    is_reg_correct_flag = true
                }
            }
        })

        $("#reg_choice_value_input_id").change(function() {
            var reg_choice_string = $("#reg_choice_value_input_id").val()
            reg_choice_values = reg_choice_string.split(",")

            is_reg_correct_flag = true
            if (reg_choice_values.length < 1 || reg_choice_values == "") {
                is_reg_correct_flag = false
            } else {
                for (let i = 0; i < reg_choice_values.length; i++) {
                    if (!$.isNumeric(parseFloat(reg_choice_values[i]))) {
                        is_reg_correct_flag = false
                        break
                    }
                }
            }

            if (is_reg_correct_flag) {
                $("#reg_choice_value_warning_id").hide()
            } else {
                $("#reg_choice_value_warning_id").show()
            }
        })
    })

    // Check whether link "test_command" has been clicked
    $("#test_command_id").bind("click", function(){
        $("#tune_command_icon_id").css({"font-size": "20px", "font-weight": "normal", "color": "cornflowerblue"})
        $("#tune_command_id").css({"font-size": "20px", "font-weight": "normal", "color": "cornflowerblue"})

        $("#test_command_icon_id").css({"font-size": "20px", "font-weight": "bolder", "color": "white"})
        $("#test_command_id").css({"font-size": "20px", "font-weight": "bolder", "color": "white"})

        is_test_flag = true

        is_batch_size_correct_flag = true
        is_latent_dim_correct_flag = true
        is_dropout_correct_flag = true
        is_lr_correct_flag = true
        is_anneal_cap_correct_flag = true
        is_factors_correct_flag = true
        is_num_ng_correct_flag = true
        is_node_dropout_correct_flag = true
        is_mess_dropout_correct_flag = true
        is_reg1_correct_flag = true
        is_reg2_correct_flag = true
        is_num_layers_correct_flag = true
        is_maxk_correct_flag = true
        is_alpha_correct_flag = true
        is_elastic_correct_flag = true
        is_context_window_correct_flag = true
        is_rho_correct_flag = true
        is_reg_correct_flag = true

        is_batch_size_choice_flag = false
        is_latent_dim_choice_flag = false
        is_dropout_choice_flag = false
        is_lr_choice_flag = false
        is_anneal_cap_choice_flag = false
        is_factors_choice_flag = false
        is_num_ng_choice_flag = false
        is_node_dropout_choice_flag = false
        is_mess_dropout_choice_flag = false
        is_reg1_choice_flag = false
        is_reg2_choice_flag = false
        is_num_layers_choice_flag = false
        is_maxk_choice_flag = false
        is_alpha_choice_flag = false
        is_elastic_choice_flag = false
        is_context_window_choice_flag = false
        is_rho_choice_flag = false
        is_reg_choice_flag = false

        // Show & hide selectors
        $("#copy_success_alert_id").hide()

        $("#optimization_metric_id").hide()
        $("#fold_num_id").hide()
        $("#algo_name_selector_id").val("multi-vae")
            $("#algo_name_selector_id").attr("Disabled", false)
            $("#alg_name_EASE").show()
            $("#alg_name_FM").show()
            $("#alg_name_NFM").show()
            $("#alg_name_NEUMF").show()
            $("#alg_name_InfAE").show()
            $("#alg_name_ItemKNN").show()
            $("#alg_name_Item2Vec").show()
            $("#alg_name_MF").show()
            $("#alg_name_MostPop").show()
            $("#alg_name_Multi-VAE").show()
            $("#alg_name_NGCF").show()
            $("#alg_name_LightGCN").show()
            $("#alg_name_PureSVD").show()
            $("#alg_name_SLIM").show()
        $("#dataset_selector_id").val("ml-100k")
            $("#dataset_selector_id").attr("Disabled", false)
        $("#preprocess_selector_id").val("origin")
            $("#preprocess_selector_id").attr("Disabled", false)
        $("#test_method_selector_id").val("tsbr")
            $("#test_method_selector_id").attr("Disabled", false)
        $("#val_method_selector_id").val("tsbr")
            $("#val_method_selector_id").attr("Disabled", false)
        $("#sample_method_selector_id").val("");
            $("#sample_method_selector_id").attr("Disabled", "Disabled")
        $("#init_method_selector_id").val("default")
            $("#init_method_selector_id").attr("Disabled", false)
            $("#ini_method_Default").show()
            $("#ini_method_Normal").show()
            $("#ini_method_Uniform").show()
            $("#ini_method_Xavier_Normal").show()
            $("#ini_method_Xavier_Uniform").show()
        $("#optimizer_selector_id").val("default")
            $("#optimizer_selector_id").attr("Disabled", false)
        $("#early_stop_selector_id").val("True")
            $("#early_stop_selector_id").attr("Disabled", false)
        $("#loss_type_selector_id").val("")
            $("#loss_type_selector_id").attr("Disabled", "Disabled");
        
        $("#hyperopt_trail_id").hide()
        $("#preprocess_number_input_id").val("")
            $("#preprocess_number_input_id").attr("Disabled", "Disabled")
            $("#preprocess_number_warning_id").hide()
        $("#test_size_input_id").val(0.2)
            $("#test_size_input_id").attr("Disabled", false)
            $("#test_size_warning_id").hide()
        $("#val_size_input_id").val(0.1)
            $("#val_size_input_id").attr("Disabled", false)
            $("#val_size_warning_id").hide()
        $("#topk_input_id").val(50)
            $("#topk_input_id").attr("Disabled", false)
            $("#topk_warning_id").hide()
        $("#epoch_input_id").val(50)
            $("#epoch_input_id").attr("Disabled", false)
            $("#epoch_warning_id").hide()
        $("#cand_num_input_id").val(1000)
            $("#cand_num_input_id").attr("Disabled", false)
            $("#cand_num_warning_id").hide()
        $("#sample_ratio_input_id").val("")
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")
            $("#sample_ratio_warning_id").hide()
        $("#gpu_input_id").val("0")
            $("#gpu_input_id").attr("Disabled", false)

        $("#page-title2_id").hide()
        $("#second_card_id").hide()

        $("#batch_size_id").show()
        $("#latent_dim_id").show()
        $("#dropout_id").show()
        $("#lr_id").show()
        $("#anneal_cap_id").show()
        $("#factors_id").hide()
        $("#num_ng_id").hide()
        $("#node_dropout_id").hide()
        $("#mess_dropout_id").hide()
        $("#reg1_id").hide()
        $("#reg2_id").hide()
        $("#num_layers_id").hide()
        $("#maxk_id").hide()
        $("#alpha_id").hide()
        $("#elastic_id").hide()
        $("#context_window_id").hide()
        $("#rho_id").hide()
        $("#reg_id").hide()

        $("#batch_size_int_id").hide()
        $("#batch_size_int_choice_id").hide()
        $("#batch_size_space_id").hide()
        $("#batch_size_group_id").hide()
        $("#batch_size_choice_group_id").hide()
        $("#latent_dim_int_id").hide()
        $("#latent_dim_int_choice_id").hide()
        $("#latent_dim_space_id").hide()
        $("#latent_dim_group_id").hide()
        $("#latent_dim_choice_group_id").hide()
        $("#dropout_float_id").hide()
        $("#dropout_float_choice_id").hide()
        $("#dropout_space_id").hide()
        $("#dropout_group_id").hide()
        $("#dropout_choice_group_id").hide()
        $("#lr_float_id").hide()
        $("#lr_float_choice_id").hide()
        $("#lr_space_id").hide()
        $("#lr_group_id").hide()
        $("#lr_choice_group_id").hide()
        $("#anneal_cap_float_id").hide()
        $("#anneal_cap_float_choice_id").hide()
        $("#anneal_cap_space_id").hide()
        $("#anneal_cap_group_id").hide()
        $("#anneal_cap_choice_group_id").hide()
        $("#factors_int_id").hide()
        $("#factors_int_choice_id").hide()
        $("#factors_space_id").hide()
        $("#factors_group_id").hide()
        $("#factors_choice_group_id").hide()
        $("#num_ng_int_id").hide()
        $("#num_ng_int_choice_id").hide()
        $("#num_ng_space_id").hide()
        $("#num_ng_group_id").hide()
        $("#num_ng_choice_group_id").hide()
        $("#node_dropout_float_id").hide()
        $("#node_dropout_float_choice_id").hide()
        $("#node_dropout_space_id").hide()
        $("#node_dropout_group_id").hide()
        $("#node_dropout_choice_group_id").hide()
        $("#mess_dropout_float_id").hide()
        $("#mess_dropout_float_choice_id").hide()
        $("#mess_dropout_space_id").hide()
        $("#mess_dropout_group_id").hide()
        $("#mess_dropout_choice_group_id").hide()
        $("#reg1_float_id").hide()
        $("#reg1_float_choice_id").hide()
        $("#reg1_space_id").hide()
        $("#reg1_group_id").hide()
        $("#reg1_choice_group_id").hide()
        $("#reg2_float_id").hide()
        $("#reg2_float_choice_id").hide()
        $("#reg2_space_id").hide()
        $("#reg2_group_id").hide()
        $("#reg2_choice_group_id").hide()
        $("#num_layers_int_id").hide()
        $("#num_layers_int_choice_id").hide()
        $("#num_layers_space_id").hide()
        $("#num_layers_group_id").hide()
        $("#num_layers_choice_group_id").hide()
        $("#maxk_int_id").hide()
        $("#maxk_int_choice_id").hide()
        $("#maxk_space_id").hide()
        $("#maxk_group_id").hide()
        $("#maxk_choice_group_id").hide()
        $("#alpha_float_id").hide()
        $("#alpha_float_choice_id").hide()
        $("#alpha_space_id").hide()
        $("#alpha_group_id").hide()
        $("#alpha_choice_group_id").hide()
        $("#elastic_float_id").hide()
        $("#elastic_float_choice_id").hide()
        $("#elastic_space_id").hide()
        $("#elastic_group_id").hide()
        $("#elastic_choice_group_id").hide()
        $("#context_window_int_id").hide()
        $("#context_window_int_choice_id").hide()
        $("#context_window_space_id").hide()
        $("#context_window_group_id").hide()
        $("#context_window_choice_group_id").hide()
        $("#rho_float_id").hide()
        $("#rho_float_choice_id").hide()
        $("#rho_space_id").hide()
        $("#rho_group_id").hide()
        $("#rho_choice_group_id").hide()
        $("#reg_float_id").hide()
        $("#reg_float_choice_id").hide()
        $("#reg_space_id").hide()
        $("#reg_group_id").hide()
        $("#reg_choice_group_id").hide()

        $("#batch_size_checkbox_id").attr("Disabled", false)
        $("#latent_dim_checkbox_id").attr("Disabled", false)
        $("#dropout_checkbox_id").attr("Disabled", false)
        $("#lr_checkbox_id").attr("Disabled", false)
        $("#anneal_cap_checkbox_id").attr("Disabled", false)
        $("#factors_checkbox_id").attr("Disabled", false)
        $("#num_ng_checkbox_id").attr("Disabled", false)
        $("#node_dropout_checkbox_id").attr("Disabled", false)
        $("#mess_dropout_checkbox_id").attr("Disabled", false)
        $("#reg1_checkbox_id").attr("Disabled", false)
        $("#reg2_checkbox_id").attr("Disabled", false)
        $("#num_layers_checkbox_id").attr("Disabled", false)
        $("#maxk_checkbox_id").attr("Disabled", false)
        $("#alpha_checkbox_id").attr("Disabled", false)
        $("#elastic_checkbox_id").attr("Disabled", false)
        $("#context_window_checkbox_id").attr("Disabled", false)
        $("#rho_checkbox_id").attr("Disabled", false)
        $("#reg_checkbox_id").attr("Disabled", false)

        $("#batch_size_checkbox_id").prop("checked", false)
        $("#latent_dim_checkbox_id").prop("checked", false)
        $("#dropout_checkbox_id").prop("checked", false)
        $("#lr_checkbox_id").prop("checked", false)
        $("#anneal_cap_checkbox_id").prop("checked", false)
        $("#factors_checkbox_id").prop("checked", false)
        $("#num_ng_checkbox_id").prop("checked", false)
        $("#node_dropout_checkbox_id").prop("checked", false)
        $("#mess_dropout_checkbox_id").prop("checked", false)
        $("#reg1_checkbox_id").prop("checked", false)
        $("#reg2_checkbox_id").prop("checked", false)
        $("#num_layers_checkbox_id").prop("checked", false)
        $("#maxk_checkbox_id").prop("checked", false)
        $("#alpha_checkbox_id").prop("checked", false)
        $("#elastic_checkbox_id").prop("checked", false)
        $("#context_window_checkbox_id").prop("checked", false)
        $("#rho_checkbox_id").prop("checked", false)
        $("#reg_checkbox_id").prop("checked", false)

        $("#batch_size_value_input_id").attr("Disabled", false)
        $("#latent_dim_value_input_id").attr("Disabled", false)
        $("#dropout_value_input_id").attr("Disabled", false)
        $("#lr_value_input_id").attr("Disabled", false)
        $("#anneal_cap_value_input_id").attr("Disabled", false)
        $("#factors_value_input_id").attr("Disabled", false)
        $("#num_ng_value_input_id").attr("Disabled", false)
        $("#node_dropout_value_input_id").attr("Disabled", false)
        $("#mess_dropout_value_input_id").attr("Disabled", false)
        $("#reg1_value_input_id").attr("Disabled", false)
        $("#reg2_value_input_id").attr("Disabled", false)
        $("#num_layers_value_input_id").attr("Disabled", false)
        $("#maxk_value_input_id").attr("Disabled", false)
        $("#alpha_value_input_id").attr("Disabled", false)
        $("#elastic_value_input_id").attr("Disabled", false)
        $("#context_window_value_input_id").attr("Disabled", false)
        $("#rho_value_input_id").attr("Disabled", false)
        $("#reg_value_input_id").attr("Disabled", false)

        $("#page-title3_id").hide()
        $("#third_card_id").hide()
        $("#copy_icon_link_id").hide()
        $("#copy_complete_icon_link_id").hide()
        $("#textarea_id").attr("readonly", "readonly")

        $("html, body").animate({ scrollTop: 0 }, 0)
        $("#submit-btn1_id").show()
        if ($("#submit-btn1_id").html() == "Reset") {
            $("#submit-btn1_id").html("Submit")
            $("#submit-btn1_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
        }
        if ($("#submit-btn2_id").html() == "Reset") {
            $("#submit-btn2_id").html("Submit")
            $("#submit-btn2_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
        }

        $("#textarea_id").val("")

        // Changes will happen when "Prepro" is set
        $("#preprocess_selector_id").change(function(){
            // If choose "Origin"
            if($("#preprocess_selector_id").val() == "origin") {
                // Changes in "Prepro_num" input box
                $("#preprocess_number_input_id").attr("Disabled", "Disabled")
                $("#preprocess_number_input_id").val("")
            // If choose "Core" or "Filter"
            } else if ($("#preprocess_selector_id").val() == "core" || $("#preprocess_selector_id").val() == "filter") {
                // Changes in "Prepro_num" input box
                $("#preprocess_number_input_id").attr("Disabled", false)
                $("#preprocess_number_input_id").val(5)
            }
        })
        
        /* Binding start */
        // Changes will happen when "Test_method" is set
        $("#test_method_selector_id").change(function(){
            // Get index of current selected option
            var current_test_method_index = $('#test_method_selector_id').get(0).selectedIndex
            // Bind "Test_method" and "Val_method"
            // Principle: The order & options of "Test_method" and "Val_method" are totally same.
            $("#test_method_selector_id").get(0).selectedIndex = current_test_method_index
            $("#val_method_selector_id").get(0).selectedIndex = current_test_method_index

            // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are RLOO or TLOO
            // "Test_method" and "Val_method" are always the same.
            if($("#test_method_selector_id").val() == "rloo" || $("#test_method_selector_id").val() == "tloo") {
                $("#test_size_input_id").attr("Disabled", "Disabled")
                $("#val_size_input_id").attr("Disabled", "Disabled")

                $("#test_size_input_id").val("")
                $("#val_size_input_id").val("")
            } else {
                $("#test_size_input_id").attr("Disabled", false)
                $("#val_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").val(0.2)
                $("#val_size_input_id").val(0.1)
            }
        })

        // Changes will happen when "Val_method" is set
        $("#val_method_selector_id").change(function(){
            // Get index of current selected option
            var current_val_method_index = $("#val_method_selector_id").get(0).selectedIndex
            // Bind "Test_method" and "Val_method"
            // Principle: The order & options of "Test_method" and "Val_method" are totally same.
            $("#val_method_selector_id").get(0).selectedIndex = current_val_method_index
            $("#test_method_selector_id").get(0).selectedIndex = current_val_method_index

            // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are set as RLOO or TLOO
            // "Test_method" and "Val_method" are always the same.
            if($("#val_method_selector_id").val() == "rloo" || $("#val_method_selector_id").val() == "tloo") {
                $("#val_size_input_id").attr("Disabled", "Disabled")
                $("#test_size_input_id").attr("Disabled", "Disabled")
                
                $("#val_size_input_id").val("")
                $("#test_size_input_id").val("")
            } else {
                $("#val_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").attr("Disabled", false)
                $("#test_size_input_id").val(0.2)
                $("#val_size_input_id").val(0.1)
            }
        })
        /* Binding end */

        // Changes will happen when "Sample_method" is set
        $("#sample_method_selector_id").change(function(){
            // "Sample_ratio" cannot be editted when "Sample_method" is set as Uniform
            if($("#sample_method_selector_id").val() == "uniform") {
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")

                $("#sample_ratio_input_id").val("")
            } else {
                $("#sample_ratio_input_id").attr("Disabled", false)
                
                $("#sample_ratio_input_id").val(0.5)
            }
        })

        /* Changes in "Algo_name" start */
        /* Part 1 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
            if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn"){
                // Changes in "Loss_type" selector
                $("#loss_type_selector_id").attr("Disabled", false);
                $("#loss_type_BPR").show()
                $("#loss_type_CL").show()
                $("#loss_type_HL").show()
                $("#loss_type_SL").show()
                $("#loss_type_TL").show()
                $("#loss_type_selector_id option[id='loss_type_CL']").attr("selected", "selected");
                $("#loss_type_selector_id").val("CL")
            // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
            } else if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim") {
                // Changes in "Loss_type" selector
                $("#loss_type_selector_id").attr("Disabled", "Disabled");
                $("#loss_type_selector_id").val("")
            }
        })

        /* Part 2 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "Init_method" selector and "Optimizer" selector
                $("#init_method_selector_id").attr("Disabled", "Disabled")
                $("#optimizer_selector_id").attr("Disabled", "Disabled")
                $("#init_method_selector_id").val("")
                $("#optimizer_selector_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "Init_method" selector and "Optimizer" selector
                $("#init_method_selector_id").attr("Disabled", false)
                $("#optimizer_selector_id").attr("Disabled", false)

                $("#ini_method_Default").show()
                $("#ini_method_Normal").show()
                $("#ini_method_Uniform").show()
                $("#ini_method_Xavier_Normal").show()
                $("#ini_method_Xavier_Uniform").show()

                $("#optimizer_Default").show()
                $("#optimizer_AdaGrad").show()
                $("#optimizer_Adam").show()
                $("#optimizer_RMSProp").show()
                $("#optimizer_SGD").show()
                $("#optimizer_Sparse_adam").show()

                $("#init_method_selector_id option[id='ini_method_Default']").attr("selected", "selected")
                $("#optimizer_selector_id option[id='optimizer_Default']").attr("selected", "selected")
                $("#init_method_selector_id").val("default")
                $("#optimizer_selector_id").val("default")
            }
        })

        /* Part 3 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
            if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn"){
                // Changes in "Sample_method" selector
                $("#sample_method_selector_id").attr("Disabled", false)
                $("#sam_method_Uniform").show()
                $("#sam_method_Low-Pop").show()
                $("#sam_method_High-Pop").show()
                $("#sample_method_selector_id option[id='sam_method_Uniform']").attr("selected", "selected");
                $("#sample_method_selector_id").val("uniform")
            // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
            } else if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim") {
                // Changes in "Sample_method" selector
                $("#sample_method_selector_id").attr("Disabled", "Disabled")
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")
                $("#sample_method_selector_id").val("")
                $("#sample_ratio_input_id").val("")
            }
        })

        /* Part 4 */
        // Changes will happen when "Test_method" is set
        $("#test_method_selector_id").change(function(){
            // If choose "RLOO (Random Leave-one-out)" or "RSBR (Random Split-by-ratio)"
            if ($("#test_method_selector_id").val() == "rloo" || 
                    $("#test_method_selector_id").val() == "rsbr"){
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", false)
                $("#fold_num_input_id").val(1)
            // If choose "TLOO (Time-aware Leave-one-out)" or "TSBR (Time-aware Split-by-ratio)"
            } else if ($("#test_method_selector_id").val() == "tloo" || 
                    $("#test_method_selector_id").val() == "tsbr") {
                // Changes in "Fold_num" input box
                $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#fold_num_input_id").val("")
            }
        })

        /* Part 5 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "GPU" input box
                $("#gpu_input_id").attr("Disabled", "Disabled")
                $("#gpu_input_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "GPU" input box
                $("#gpu_input_id").attr("Disabled", false)
                $("#gpu_input_id").val("0")
            }
        })

        /* Part 6 */
        // Changes will happen when "Algo_name" is set
        $("#algo_name_selector_id").change(function(){
            // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
            if ($("#algo_name_selector_id").val() == "ease" || 
                    $("#algo_name_selector_id").val() == "itemknn" || 
                    $("#algo_name_selector_id").val() == "mostpop" || 
                    $("#algo_name_selector_id").val() == "puresvd" || 
                    $("#algo_name_selector_id").val() == "slim"){
                // Changes in "Early_stop" selector
                $("#early_stop_selector_id").attr("Disabled", "Disabled")
                $("#early_stop_selector_id").val("")
            // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
            } else if ($("#algo_name_selector_id").val() == "fm" || 
                    $("#algo_name_selector_id").val() == "nfm" || 
                    $("#algo_name_selector_id").val() == "neumf" || 
                    $("#algo_name_selector_id").val() == "infae" || 
                    $("#algo_name_selector_id").val() == "item2vec" || 
                    $("#algo_name_selector_id").val() == "mf" || 
                    $("#algo_name_selector_id").val() == "multi-vae" || 
                    $("#algo_name_selector_id").val() == "ngcf" || 
                    $("#algo_name_selector_id").val() == "lightgcn") {
                // Changes in "Early_stop" selector
                $("#early_stop_selector_id").attr("Disabled", false)
                $("#early_stop_selector_id").val("True")
            }
        })
        /* Changes in "Algo_name" end */

        // Remove cursor in input box after press enter
        $(function(){
            $(document).on("keypress",function(e) {
                if(e.which == 13) {
                    $("#hyperopt_trail_input_id").blur()
                    $("#preprocess_number_input_id").blur()
                    $("#topk_input_id").blur()
                    $("#epoch_input_id").blur()
                    $("#test_size_input_id").blur()
                    $("#val_size_input_id").blur()
                    $("#cand_num_input_id").blur()
                    $("#gpu_input_id").blur()
                    $("#sample_ratio_input_id").blur()

                    $("#batch_size_value_input_id").blur()
                    $("#latent_dim_value_input_id").blur()
                    $("#dropout_value_input_id").blur()
                    $("#lr_value_input_id").blur()
                    $("#anneal_cap_value_input_id").blur()
                    $("#factors_value_input_id").blur()
                    $("#num_ng_value_input_id").blur()
                    $("#node_dropout_value_input_id").blur()
                    $("#mess_dropout_value_input_id").blur()
                    $("#reg1_value_input_id").blur()
                    $("#reg2_value_input_id").blur()
                    $("#num_layers_value_input_id").blur()
                    $("#maxk_value_input_id").blur()
                    $("#alpha_value_input_id").blur()
                    $("#elastic_value_input_id").blur()
                    $("#context_window_value_input_id").blur()
                    $("#rho_value_input_id").blur()
                    $("#reg_value_input_id").blur()
                }
            })
        })

        // Check whether the input item is numeric or a number or an integer
        $("#hyperopt_trail_input_id").change(function(){
            var val_hyperopt_trail = $("#hyperopt_trail_input_id").val()
            test_val_hyperopt_trail = Number(val_hyperopt_trail)
            if (!Number.isInteger(test_val_hyperopt_trail)) {
                $("#hyperopt_trail_input_id").val(val_hyperopt_trail)
                $("#hyperopt_trail_warning_id").show()
            } else {
                $("#hyperopt_trail_input_id").val(Number(val_hyperopt_trail))
                $("#hyperopt_trail_warning_id").hide()
            }

            // Set input range for "HyperOPT_trail"
            // The value should be an integer larger than 0
            if ($("#hyperopt_trail_input_id").val() < 1) {
                $("#hyperopt_trail_input_id").val(1)
                $("#hyperopt_trail_warning_id").show()
            }
        })

        $("#preprocess_number_input_id").change(function(){
            var val_prepro_number = $("#preprocess_number_input_id").val()
            test_val_prepro_number = Number(val_prepro_number)
            if (!Number.isInteger(test_val_prepro_number) && $("#preprocess_selector_id").val() !== "origin") {
                $("#preprocess_number_input_id").val(val_prepro_number)
                $("#preprocess_number_warning_id").show()
            } else {
                $("#preprocess_number_input_id").val(Number(val_prepro_number))
                $("#preprocess_number_warning_id").hide()
            }

            // Set input range for "Prepro_number"
            // The value should be an integer larger than 0
            if ($("#preprocess_number_input_id").val() < 1) {
                $("#preprocess_number_input_id").val(1)
                $("#preprocess_number_warning_id").show()
            }
        })

        $("#topk_input_id").change(function(){
            var val_topk = $("#topk_input_id").val()
            test_val_topk = Number(val_topk)
            if (!Number.isInteger(test_val_topk)) {
                $("#topk_input_id").val(val_topk)
                $("#topk_warning_id").show()
            } else {
                $("#topk_input_id").val(Number(val_topk))
                $("#topk_warning_id").hide()
            }

            // Set input range for "Top-K"
            // The value should be an integer larger than 0
            if ($("#topk_input_id").val() < 1) {
                $("#topk_input_id").val(1)
                $("#topk_warning_id").show()
            }
        })

        $("#epoch_input_id").change(function(){
            var val_epoch = $("#epoch_input_id").val()
            test_val_epoch = Number(val_epoch)
            if (!Number.isInteger(test_val_epoch)) {
                $("#epoch_input_id").val(val_epoch)
                $("#epoch_warning_id").show()
            } else {
                $("#epoch_input_id").val(Number(val_epoch))
                $("#epoch_warning_id").hide()
            }

            // Set input range for "Epoch"
            // The value should be an integer larger than 0
            if ($("#epoch_input_id").val() < 1) {
                $("#epoch_input_id").val(1)
                $("#epoch_warning_id").show()
            }
        })
        
        $("#test_size_input_id").change(function(){
            var val_test_size = $("#test_size_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_test_size) && ($("#test_method_selector_id").val() !== "rloo" || $("#test_method_selector_id").val() !== "tloo")) {
                $("#test_size_input_id").val(val_test_size)
                $("#test_size_warning_id").show()
            } else {
                $("#test_size_input_id").val(Number(val_test_size))
                $("#test_size_warning_id").hide()
            }

            // Set input range for "Test_size"
            // The ratio range is [0, 1]
            if ($("#test_size_input_id").val() > 1) {
                $("#test_size_input_id").val(1)
                $("#test_size_warning_id").show()
            } else if ($("#test_size_input_id").val() < 0) {
                $("#test_size_input_id").val(0)
                $("#test_size_warning_id").show()
            }
        })

        $("#val_size_input_id").change(function(){
            var val_val_size = $("#val_size_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_val_size) && ($("#val_method_selector_id").val() !== "rloo" || $("#val_method_selector_id").val() !== "tloo")) {
                $("#val_size_input_id").val(val_val_size)
                $("#val_size_warning_id").show()
            } else {
                $("#val_size_input_id").val(Number(val_val_size))
                $("#val_size_warning_id").hide()
            }

            // Set input range for "Val_size"
            // The ratio range is [0, 1]
            if ($("#val_size_input_id").val() > 1) {
                $("#val_size_input_id").val("1")
                $("#val_size_warning_id").show()
            } else if ($("#val_size_input_id").val() < 0) {
                $("#val_size_input_id").val("0")
                $("#val_size_warning_id").show()
            }
        })

        $("#cand_num_input_id").change(function(){
            var val_cand_num = $("#cand_num_input_id").val()
            test_val_cand_num = Number(val_cand_num)
            if (!Number.isInteger(test_val_cand_num)) {
                $("#cand_num_input_id").val(val_cand_num)
                $("#cand_num_warning_id").show()
            } else {
                $("#cand_num_input_id").val(Number(val_cand_num))
                $("#cand_num_warning_id").hide()
            }

            // Set input range for "Cand_num"
            // The value should be an integer larger than 999
            if ($("#cand_num_input_id").val() < 1000) {
                $("#cand_num_input_id").val(1000)
                $("#cand_num_warning_id").show()
            }
        })
        
        $("#gpu_input_id").change(function(){
            $("#gpu_input_id").val()
        })

        $("#sample_ratio_input_id").change(function(){
            var val_sample_ratio = $("#sample_ratio_input_id").val()
            // Disabled input box doesn't need to be check whether the value is valid or not.
            if (!$.isNumeric(val_sample_ratio) && $("#sample_method_selector_id").val != "uniform") {
                $("#sample_ratio_input_id").val(val_sample_ratio)
                $("#sample_ratio_warning_id").show()
            } else {
                $("#sample_ratio_input_id").val(Number(val_sample_ratio))
                $("#sample_ratio_warning_id").hide()
            }

            // Set input range for "Sample_ratio"
            // The ratio range is [0, 1]
            if ($("#sample_ratio_input_id").val() > 1) {
                $("#sample_ratio_input_id").val(1)
                $("#sample_ratio_warning_id").show()
            } else if ($("#sample_ratio_input_id").val() < 0) {
                $("#sample_ratio_input_id").val(0)
                $("#sample_ratio_warning_id").show()
            }
        })

        // Algorithm Specific Settings Part
        // Algo-setting initialization
        if (is_test_flag) {
            $("#batch_size_checkbox_id").change(function() {
                if ($("#batch_size_checkbox_id")[0].checked) {
                    $("#batch_size_int_id").hide()
                    $("#batch_size_int_choice_id").hide()
    
                    $("#batch_size_space_id").show()
                    $("#batch_size_group_id").show()
                    $("#batch_size_choice_group_id").hide()
    
                    $("#batch_size_tune1_id").hide()
                    $("#batch_size_tune2_id").hide()
                    $("#batch_size_tune3_id").hide()
                    $("#batch_size_test_id").show()
    
                    $("#batch_size_value_input_id").val(128)
    
                    $("#batch_size_value_warning_id").hide()
                } else {
                    $("#batch_size_int_id").hide()
                    $("#batch_size_int_choice_id").hide()
    
                    $("#batch_size_space_id").hide()
                    $("#batch_size_group_id").hide()
                    $("#batch_size_choice_group_id").hide()
                }
            })
    
            $("#latent_dim_checkbox_id").change(function() {
                if ($("#latent_dim_checkbox_id")[0].checked) {
                    $("#latent_dim_int_id").hide()
                    $("#latent_dim_int_choice_id").hide()
    
                    $("#latent_dim_space_id").show()
                    $("#latent_dim_group_id").show()
                    $("#latent_dim_choice_group_id").hide()
    
                    $("#latent_dim_tune1_id").hide()
                    $("#latent_dim_tune2_id").hide()
                    $("#latent_dim_tune3_id").hide()
                    $("#latent_dim_test_id").show()
    
                    $("#latent_dim_value_input_id").val(128)
    
                    $("#latent_dim_value_warning_id").hide()
                } else {
                    $("#latent_dim_int_id").hide()
                    $("#latent_dim_int_choice_id").hide()
    
                    $("#latent_dim_space_id").hide()
                    $("#latent_dim_group_id").hide()
                    $("#latent_dim_choice_group_id").hide()
                }
            })
    
            $("#dropout_checkbox_id").change(function() {
                if ($("#dropout_checkbox_id")[0].checked) {
                    $("#dropout_float_id").hide()
                    $("#dropout_float_choice_id").hide()
    
                    $("#dropout_space_id").show()
                    $("#dropout_group_id").show()
                    $("#dropout_choice_group_id").hide()
    
                    $("#dropout_tune1_id").hide()
                    $("#dropout_tune2_id").hide()
                    $("#dropout_tune3_id").hide()
                    $("#dropout_test_id").show()
    
                    $("#dropout_value_input_id").val(0.5)
    
                    $("#dropout_value_warning_id").hide()
                } else {
                    $("#dropout_float_id").hide()
                    $("#dropout_float_choice_id").hide()
    
                    $("#dropout_space_id").hide()
                    $("#dropout_group_id").hide()
                    $("#dropout_choice_group_id").hide()
                }
            })
    
            $("#lr_checkbox_id").change(function() {
                if ($("#lr_checkbox_id")[0].checked) {
                    $("#lr_float_id").hide()
                    $("#lr_float_choice_id").hide()
    
                    $("#lr_space_id").show()
                    $("#lr_group_id").show()
                    $("#lr_choice_group_id").hide()
    
                    $("#lr_tune1_id").hide()
                    $("#lr_tune2_id").hide()
                    $("#lr_tune3_id").hide()
                    $("#lr_test_id").show()
    
                    $("#lr_value_input_id").val(0.01)
    
                    $("#lr_value_warning_id").hide()
                } else {
                    $("#lr_float_id").hide()
                    $("#lr_float_choice_id").hide()
    
                    $("#lr_space_id").hide()
                    $("#lr_group_id").hide()
                    $("#lr_choice_group_id").hide()
                }
            })
    
            $("#anneal_cap_checkbox_id").change(function() {
                if ($("#anneal_cap_checkbox_id")[0].checked) {
                    $("#anneal_cap_float_id").hide()
                    $("#anneal_cap_float_choice_id").hide()
    
                    $("#anneal_cap_space_id").show()
                    $("#anneal_cap_group_id").show()
                    $("#anneal_cap_choice_group_id").hide()
    
                    $("#anneal_cap_tune1_id").hide()
                    $("#anneal_cap_tune2_id").hide()
                    $("#anneal_cap_tune3_id").hide()
                    $("#anneal_cap_test_id").show()
    
                    $("#anneal_cap_value_input_id").val(0.2)
    
                    $("#anneal_cap_value_warning_id").hide()
                } else {
                    $("#anneal_cap_float_id").hide()
                    $("#anneal_cap_float_choice_id").hide()
    
                    $("#anneal_cap_space_id").hide()
                    $("#anneal_cap_group_id").hide()
                    $("#anneal_cap_choice_group_id").hide()
                }
            })
    
            $("#factors_checkbox_id").change(function() {
                if ($("#factors_checkbox_id")[0].checked) {
                    $("#factors_int_id").hide()
                    $("#factors_int_choice_id").hide()
    
                    $("#factors_space_id").show()
                    $("#factors_group_id").show()
                    $("#factors_choice_group_id").hide()
    
                    $("#factors_tune1_id").hide()
                    $("#factors_tune2_id").hide()
                    $("#factors_tune3_id").hide()
                    $("#factors_test_id").show()
    
                    $("#factors_value_input_id").val(50)
    
                    $("#factors_value_warning_id").hide()
                } else {
                    $("#factors_int_id").hide()
                    $("#factors_int_choice_id").hide()
    
                    $("#factors_space_id").hide()
                    $("#factors_group_id").hide()
                    $("#factors_choice_group_id").hide()
                }
            })
    
            $("#num_ng_checkbox_id").change(function() {
                if ($("#num_ng_checkbox_id")[0].checked) {
                    $("#num_ng_int_id").hide()
                    $("#num_ng_int_choice_id").hide()
    
                    $("#num_ng_space_id").show()
                    $("#num_ng_group_id").show()
                    $("#num_ng_choice_group_id").hide()
    
                    $("#num_ng_tune1_id").hide()
                    $("#num_ng_tune2_id").hide()
                    $("#num_ng_tune3_id").hide()
                    $("#num_ng_test_id").show()
    
                    $("#num_ng_value_input_id").val(2)
    
                    $("#num_ng_value_warning_id").hide()
                } else {
                    $("#num_ng_int_id").hide()
                    $("#num_ng_int_choice_id").hide()
    
                    $("#num_ng_space_id").hide()
                    $("#num_ng_group_id").hide()
                    $("#num_ng_choice_group_id").hide()
                }
            })
    
            $("#node_dropout_checkbox_id").change(function() {
                if ($("#node_dropout_checkbox_id")[0].checked) {
                    $("#node_dropout_float_id").hide()
                    $("#node_dropout_float_choice_id").hide()
    
                    $("#node_dropout_space_id").show()
                    $("#node_dropout_group_id").show()
                    $("#node_dropout_choice_group_id").hide()
    
                    $("#node_dropout_tune1_id").hide()
                    $("#node_dropout_tune2_id").hide()
                    $("#node_dropout_tune3_id").hide()
                    $("#node_dropout_test_id").show()
    
                    $("#node_dropout_value_input_id").val(0.5)
    
                    $("#node_dropout_value_warning_id").hide()
                } else {
                    $("#node_dropout_float_id").hide()
                    $("#node_dropout_float_choice_id").hide()
    
                    $("#node_dropout_space_id").hide()
                    $("#node_dropout_group_id").hide()
                    $("#node_dropout_choice_group_id").hide()
                }
            })
    
            $("#mess_dropout_checkbox_id").change(function() {
                if ($("#mess_dropout_checkbox_id")[0].checked) {
                    $("#mess_dropout_float_id").hide()
                    $("#mess_dropout_float_choice_id").hide()
    
                    $("#mess_dropout_space_id").show()
                    $("#mess_dropout_group_id").show()
                    $("#mess_dropout_choice_group_id").hide()
    
                    $("#mess_dropout_tune1_id").hide()
                    $("#mess_dropout_tune2_id").hide()
                    $("#mess_dropout_tune3_id").hide()
                    $("#mess_dropout_test_id").show()
    
                    $("#mess_dropout_value_input_id").val(0.5)
    
                    $("#mess_dropout_value_warning_id").hide()
                } else {
                    $("#mess_dropout_float_id").hide()
                    $("#mess_dropout_float_choice_id").hide()
    
                    $("#mess_dropout_space_id").hide()
                    $("#mess_dropout_group_id").hide()
                    $("#mess_dropout_choice_group_id").hide()
                }
            })
    
            $("#reg1_checkbox_id").change(function() {
                if ($("#reg1_checkbox_id")[0].checked) {
                    $("#reg1_float_id").hide()
                    $("#reg1_float_choice_id").hide()
    
                    $("#reg1_space_id").show()
                    $("#reg1_group_id").show()
                    $("#reg1_choice_group_id").hide()
    
                    $("#reg1_tune1_id").hide()
                    $("#reg1_tune2_id").hide()
                    $("#reg1_tune3_id").hide()
                    $("#reg1_test_id").show()
    
                    $("#reg1_value_input_id").val(0)
    
                    $("#reg1_value_warning_id").hide()
                } else {
                    $("#reg1_float_id").hide()
                    $("#reg1_float_choice_id").hide()
    
                    $("#reg1_space_id").hide()
                    $("#reg1_group_id").hide()
                    $("#reg1_choice_group_id").hide()
                }
            })
    
            $("#reg2_checkbox_id").change(function() {
                if ($("#reg2_checkbox_id")[0].checked) {
                    $("#reg2_float_id").hide()
                    $("#reg2_float_choice_id").hide()
    
                    $("#reg2_space_id").show()
                    $("#reg2_group_id").show()
                    $("#reg2_choice_group_id").hide()
    
                    $("#reg2_tune1_id").hide()
                    $("#reg2_tune2_id").hide()
                    $("#reg2_tune3_id").hide()
                    $("#reg2_test_id").show()
    
                    $("#reg2_value_input_id").val(0)
    
                    $("#reg2_value_warning_id").hide()
                } else {
                    $("#reg2_float_id").hide()
                    $("#reg2_float_choice_id").hide()
    
                    $("#reg2_space_id").hide()
                    $("#reg2_group_id").hide()
                    $("#reg2_choice_group_id").hide()
                }
            })
    
            $("#num_layers_checkbox_id").change(function() {
                if ($("#num_layers_checkbox_id")[0].checked) {
                    $("#num_layers_int_id").hide()
                    $("#num_layers_int_choice_id").hide()
    
                    $("#num_layers_space_id").show()
                    $("#num_layers_group_id").show()
                    $("#num_layers_choice_group_id").hide()
    
                    $("#num_layers_tune1_id").hide()
                    $("#num_layers_tune2_id").hide()
                    $("#num_layers_tune3_id").hide()
                    $("#num_layers_test_id").show()
    
                    $("#num_layers_value_input_id").val(2)
    
                    $("#num_layers_value_warning_id").hide()
                } else {
                    $("#num_layers_int_id").hide()
                    $("#num_layers_int_choice_id").hide()
    
                    $("#num_layers_space_id").hide()
                    $("#num_layers_group_id").hide()
                    $("#num_layers_choice_group_id").hide()
                }
            })
    
            $("#maxk_checkbox_id").change(function() {
                if ($("#maxk_checkbox_id")[0].checked) {
                    $("#maxk_int_id").hide()
                    $("#maxk_int_choice_id").hide()
    
                    $("#maxk_space_id").show()
                    $("#maxk_group_id").show()
                    $("#maxk_choice_group_id").hide()
    
                    $("#maxk_tune1_id").hide()
                    $("#maxk_tune2_id").hide()
                    $("#maxk_tune3_id").hide()
                    $("#maxk_test_id").show()
    
                    $("#maxk_value_input_id").val(40)
    
                    $("#maxk_value_warning_id").hide()
                } else {
                    $("#maxk_int_id").hide()
                    $("#maxk_int_choice_id").hide()
    
                    $("#maxk_space_id").hide()
                    $("#maxk_group_id").hide()
                    $("#maxk_choice_group_id").hide()
                }
            })
    
            $("#alpha_checkbox_id").change(function() {
                if ($("#alpha_checkbox_id")[0].checked) {
                    $("#alpha_float_id").hide()
                    $("#alpha_float_choice_id").hide()
    
                    $("#alpha_space_id").show()
                    $("#alpha_group_id").show()
                    $("#alpha_choice_group_id").hide()
    
                    $("#alpha_tune1_id").hide()
                    $("#alpha_tune2_id").hide()
                    $("#alpha_tune3_id").hide()
                    $("#alpha_test_id").show()
    
                    $("#alpha_value_input_id").val(40)
    
                    $("#alpha_value_warning_id").hide()
                } else {
                    $("#alpha_float_id").hide()
                    $("#alpha_float_choice_id").hide()
    
                    $("#alpha_space_id").hide()
                    $("#alpha_group_id").hide()
                    $("#alpha_choice_group_id").hide()
                }
            })
    
            $("#elastic_checkbox_id").change(function() {
                if ($("#elastic_checkbox_id")[0].checked) {
                    $("#elastic_float_id").hide()
                    $("#elastic_float_choice_id").hide()
    
                    $("#elastic_space_id").show()
                    $("#elastic_group_id").show()
                    $("#elastic_choice_group_id").hide()
    
                    $("#elastic_tune1_id").hide()
                    $("#elastic_tune2_id").hide()
                    $("#elastic_tune3_id").hide()
                    $("#elastic_test_id").show()
    
                    $("#elastic_value_input_id").val(0.5)
    
                    $("#elastic_value_warning_id").hide()
                } else {
                    $("#elastic_float_id").hide()
                    $("#elastic_float_choice_id").hide()
    
                    $("#elastic_space_id").hide()
                    $("#elastic_group_id").hide()
                    $("#elastic_choice_group_id").hide()
                }
            })
    
            $("#context_window_checkbox_id").change(function() {
                if ($("#context_window_checkbox_id")[0].checked) {
                    $("#context_window_int_id").hide()
                    $("#context_window_int_choice_id").hide()
    
                    $("#context_window_space_id").show()
                    $("#context_window_group_id").show()
                    $("#context_window_choice_group_id").hide()
    
                    $("#context_window_tune1_id").hide()
                    $("#context_window_tune2_id").hide()
                    $("#context_window_tune3_id").hide()
                    $("#context_window_test_id").show()
    
                    $("#context_window_value_input_id").val(2)
    
                    $("#context_window_value_min_warning_id").hide()
                } else {
                    $("#context_window_int_id").hide()
                    $("#context_window_int_choice_id").hide()
    
                    $("#context_window_space_id").hide()
                    $("#context_window_group_id").hide()
                    $("#context_window_choice_group_id").hide()
                }
            })
    
            $("#rho_checkbox_id").change(function() {
                if ($("#rho_checkbox_id")[0].checked) {
                    $("#rho_float_id").hide()
                    $("#rho_float_choice_id").hide()
    
                    $("#rho_space_id").show()
                    $("#rho_group_id").show()
                    $("#rho_choice_group_id").hide()
    
                    $("#rho_tune1_id").hide()
                    $("#rho_tune2_id").hide()
                    $("#rho_tune3_id").hide()
                    $("#rho_test_id").show()
    
                    $("#rho_value_input_id").val(0.5)
    
                    $("#rho_value_warning_id").hide()
                } else {
                    $("#rho_float_id").hide()
                    $("#rho_float_choice_id").hide()
    
                    $("#rho_space_id").hide()
                    $("#rho_group_id").hide()
                    $("#rho_choice_group_id").hide()
                }
            })
    
            $("#reg_checkbox_id").change(function() {
                if ($("#reg_checkbox_id")[0].checked) {
                    $("#reg_float_id").hide()
                    $("#reg_float_choice_id").hide()
    
                    $("#reg_space_id").show()
                    $("#reg_group_id").show()
                    $("#reg_choice_group_id").hide()
    
                    $("#reg_tune1_id").hide()
                    $("#reg_tune2_id").hide()
                    $("#reg_tune3_id").hide()
                    $("#reg_test_id").show()
    
                    $("#reg_value_input_id").val(200)
    
                    $("#reg_value_warning_id").hide()
                } else {
                    $("#reg_float_id").hide()
                    $("#reg_float_choice_id").hide()
    
                    $("#reg_space_id").hide()
                    $("#reg_group_id").hide()
                    $("#reg_choice_group_id").hide()
                }
            })
        }

        // Check whether the input item is numeric or a number or an integer in Algo-specific-setting Part
        $("#batch_size_value_input_id").change(function(){
            var val_value_batch_size = $("#batch_size_value_input_id").val()
            test_val_value_batch_size = Number(val_value_batch_size)
            if (!Number.isInteger(test_val_value_batch_size)) {
                $("#batch_size_value_input_id").val(val_value_batch_size)
                $("#batch_size_value_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                // Set input range for "value_batch_size"
                // The value should be an integer larger than 0
                if ($("#batch_size_value_input_id").val() < 1) {
                    $("#batch_size_value_input_id").val(1)
                    $("#batch_size_value_warning_id").show()
                    is_batch_size_correct_flag = true
                } else {
                    $("#batch_size_value_input_id").val(Number(val_value_batch_size))
                    $("#batch_size_value_warning_id").hide()
                    is_batch_size_correct_flag = true
                }
            }
        })

        $("#latent_dim_value_input_id").change(function(){
            var val_value_latent_dim = $("#latent_dim_value_input_id").val()
            test_val_value_latent_dim = Number(val_value_latent_dim)
            if (!Number.isInteger(test_val_value_latent_dim)) {
                $("#latent_dim_value_input_id").val(val_value_latent_dim)
                $("#latent_dim_value_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                // Set input range for "value_latent_dim"
                // The value should be an integer larger than 0
                if ($("#latent_dim_value_input_id").val() < 1) {
                    $("#latent_dim_value_input_id").val(1)
                    $("#latent_dim_value_warning_id").show()
                    is_latent_dim_correct_flag = true
                } else {
                    $("#latent_dim_value_input_id").val(Number(val_value_latent_dim))
                    $("#latent_dim_value_warning_id").hide()
                    is_latent_dim_correct_flag = true
                }
            }
        })

        $("#factors_value_input_id").change(function(){
            var val_value_factors = $("#factors_value_input_id").val()
            test_val_value_factors = Number(val_value_factors)
            if (!Number.isInteger(test_val_value_factors)) {
                $("#factors_value_input_id").val(val_value_factors)
                $("#factors_value_warning_id").show()
                is_factors_correct_flag = false
            } else {
                // Set input range for "value_factors"
                // The value should be an integer larger than 0
                if ($("#factors_value_input_id").val() < 1) {
                    $("#factors_value_input_id").val(1)
                    $("#factors_value_warning_id").show()
                    is_factors_correct_flag = true
                } else {
                    $("#factors_value_input_id").val(Number(val_value_factors))
                    $("#factors_value_warning_id").hide()
                    is_factors_correct_flag = true
                }
            }
        })

        $("#num_ng_value_input_id").change(function(){
            var val_value_num_ng = $("#num_ng_value_input_id").val()
            test_val_value_num_ng = Number(val_value_num_ng)
            if (!Number.isInteger(test_val_value_num_ng)) {
                $("#num_ng_value_input_id").val(val_value_num_ng)
                $("#num_ng_value_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                // Set input range for "value_num_ng"
                // The value should be an integer larger than 0
                if ($("#num_ng_value_input_id").val() < 1) {
                    $("#num_ng_value_input_id").val(1)
                    $("#num_ng_value_warning_id").show()
                    is_num_ng_correct_flag = true
                } else {
                    $("#num_ng_min_input_id").val(Number(val_value_num_ng))
                    $("#num_ng_min_warning_id").hide()
                    is_num_ng_correct_flag = true
                }
            }
        })

        $("#num_layers_value_input_id").change(function(){
            var val_value_num_layers = $("#num_layers_value_input_id").val()
            test_val_value_num_layers = Number(val_value_num_layers)
            if (!Number.isInteger(test_val_value_num_layers)) {
                $("#num_layers_value_input_id").val(val_value_num_layers)
                $("#num_layers_value_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                // Set input range for "value_num_layers"
                // The value should be an integer larger than 0
                if ($("#num_layers_value_input_id").val() < 1) {
                    $("#num_layers_value_input_id").val(1)
                    $("#num_layers_value_warning_id").show()
                    is_num_layers_correct_flag = true
                } else {
                    $("#num_layers_value_input_id").val(Number(val_value_num_layers))
                    $("#num_layers_value_warning_id").hide()
                    is_num_layers_correct_flag = true
                }
            }
        })

        $("#maxk_value_input_id").change(function(){
            var val_value_maxk = $("#maxk_value_input_id").val()
            test_val_value_maxk = Number(val_value_maxk)
            if (!Number.isInteger(test_val_value_maxk)) {
                $("#maxk_value_input_id").val(val_value_maxk)
                $("#maxk_value_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                // Set input range for "value_maxk"
                // The value should be an integer larger than 0
                if ($("#maxk_value_input_id").val() < 1) {
                    $("#maxk_value_input_id").val(1)
                    $("#maxk_value_warning_id").show()
                    is_maxk_correct_flag = true
                } else {
                    $("#maxk_value_input_id").val(Number(val_value_maxk))
                    $("#maxk_value_warning_id").hide()
                    is_maxk_correct_flag = true
                }
            }
        })

        $("#context_window_value_input_id").change(function(){
            var val_value_context_window = $("#context_window_value_input_id").val()
            test_val_value_context_window = Number(val_value_context_window)
            if (!Number.isInteger(test_val_value_context_window)) {
                $("#context_window_value_input_id").val(val_value_context_window)
                $("#context_window_value_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                // Set input range for "value_context_window"
                // The value should be an integer larger than 0
                if ($("#context_window_value_input_id").val() < 1) {
                    $("#context_window_value_input_id").val(1)
                    $("#context_window_value_warning_id").show()
                    is_context_window_correct_flag = true
                } else {
                    $("#context_window_value_input_id").val(Number(val_value_context_window))
                    $("#context_window_value_warning_id").hide()
                    is_context_window_correct_flag = true
                }
            }
        })

        $("#dropout_value_input_id").change(function(){
            var val_value_dropout = $("#dropout_value_input_id").val()
            if (!$.isNumeric(val_value_dropout)) {
                $("#dropout_value_input_id").val(val_value_dropout)
                $("#dropout_value_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                // Set input range for "value_dropout"
                // The value should be a real number between 0 and 1
                if ($("#dropout_value_input_id").val() < 0) {
                    $("#dropout_value_input_id").val(0)
                    $("#dropout_value_warning_id").show()
                    is_dropout_correct_flag = true
                } else if ($("#dropout_value_input_id").val() > 1) {
                    $("#dropout_value_input_id").val(1)
                    $("#dropout_value_warning_id").show()
                    is_dropout_correct_flag = true
                } else {
                    $("#dropout_value_input_id").val(Number(val_value_dropout))
                    $("#dropout_value_warning_id").hide()
                    is_dropout_correct_flag = true
                }
            }
        })

        $("#node_dropout_value_input_id").change(function(){
            var val_value_node_dropout = $("#node_dropout_value_input_id").val()
            if (!$.isNumeric(val_value_node_dropout)) {
                $("#node_dropout_value_input_id").val(val_value_node_dropout)
                $("#node_dropout_value_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                // Set input range for "value_node_dropout"
                // The value should be a real number between 0 and 1
                if ($("#node_dropout_value_input_id").val() < 0) {
                    $("#node_dropout_value_input_id").val(0)
                    $("#node_dropout_value_warning_id").show()
                    is_node_dropout_correct_flag = true
                } else if ($("#node_dropout_value_input_id").val() > 1) {
                    $("#node_dropout_value_input_id").val(1)
                    $("#node_dropout_value_warning_id").show()
                    is_node_dropout_correct_flag = true
                } else {
                    $("#node_dropout_value_input_id").val(Number(val_value_node_dropout))
                    $("#node_dropout_value_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
            }
        })

        $("#mess_dropout_value_input_id").change(function(){
            var val_value_mess_dropout = $("#mess_dropout_value_input_id").val()
            if (!$.isNumeric(val_value_mess_dropout)) {
                $("#mess_dropout_value_input_id").val(val_value_mess_dropout)
                $("#mess_dropout_value_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                // Set input range for "value_mess_dropout"
                // The value should be a real number between 0 and 1
                if ($("#mess_dropout_value_input_id").val() < 0) {
                    $("#mess_dropout_value_input_id").val(0)
                    $("#mess_dropout_value_warning_id").show()
                    is_mess_dropout_correct_flag = true
                } else if ($("#mess_dropout_value_input_id").val() > 1) {
                    $("#mess_dropout_value_input_id").val(1)
                    $("#mess_dropout_value_warning_id").show()
                    is_mess_dropout_correct_flag = true
                } else {
                    $("#mess_dropout_value_input_id").val(Number(val_value_mess_dropout))
                    $("#mess_dropout_value_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
            }
        })

        $("#lr_value_input_id").change(function(){
            var val_value_lr = $("#lr_value_input_id").val()
            if (!$.isNumeric(val_value_lr)) {
                $("#lr_value_input_id").val(val_value_lr)
                $("#lr_value_warning_id").show()
                is_lr_correct_flag = false
            } else {
                // Set input range for "value_lr"
                // The value should be a real number larger than 0
                if ($("#lr_value_input_id").val() < 0) {
                    $("#lr_value_input_id").val(0)
                    $("#lr_value_warning_id").show()
                    is_lr_correct_flag = true
                } else {
                    $("#lr_value_input_id").val(Number(val_value_lr))
                    $("#lr_value_warning_id").hide()
                    is_lr_correct_flag = true
                }
            }
        })

        $("#anneal_cap_value_input_id").change(function(){
            var val_value_anneal_cap = $("#anneal_cap_value_input_id").val()
            if (!$.isNumeric(val_value_anneal_cap)) {
                $("#anneal_cap_value_input_id").val(val_value_anneal_cap)
                $("#anneal_cap_value_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                // Set input range for "value_anneal_cap"
                // The value should be a real number larger than 0
                if ($("#anneal_cap_value_input_id").val() < 0) {
                    $("#anneal_cap_value_input_id").val(0)
                    $("#anneal_cap_value_warning_id").show()
                    is_anneal_cap_correct_flag = true
                } else {
                    $("#anneal_cap_value_input_id").val(Number(val_value_anneal_cap))
                    $("#anneal_cap_value_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
            }
        })

        $("#reg1_value_input_id").change(function(){
            var val_value_reg1 = $("#reg1_value_input_id").val()
            if (!$.isNumeric(val_value_reg1)) {
                $("#reg1_value_input_id").val(val_value_reg1)
                $("#reg1_value_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                // Set input range for "value_reg1"
                // The value should be a real number larger than 0
                if ($("#reg1_value_input_id").val() < 0) {
                    $("#reg1_value_input_id").val(0)
                    $("#reg1_value_warning_id").show()
                    is_reg1_correct_flag = true
                } else {
                    $("#reg1_value_input_id").val(Number(val_value_reg1))
                    $("#reg1_value_warning_id").hide()
                    is_reg1_correct_flag = true
                }
            }
        })

        $("#reg2_value_input_id").change(function(){
            var val_value_reg2 = $("#reg2_value_input_id").val()
            if (!$.isNumeric(val_value_reg2)) {
                $("#reg2_value_input_id").val(val_value_reg2)
                $("#reg2_value_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                // Set input range for "value_reg2"
                // The value should be a real number larger than 0
                if ($("#reg2_value_input_id").val() < 0) {
                    $("#reg2_value_input_id").val(0)
                    $("#reg2_value_warning_id").show()
                    is_reg2_correct_flag = true
                } else {
                    $("#reg2_min_input_id").val(Number(val_value_reg2))
                    $("#reg2_min_warning_id").hide()
                    is_reg2_correct_flag = true
                }
            }
        })

        $("#alpha_value_input_id").change(function(){
            var val_value_alpha = $("#alpha_value_input_id").val()
            if (!$.isNumeric(val_value_alpha)) {
                $("#alpha_value_input_id").val(val_value_alpha)
                $("#alpha_value_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                // Set input range for "value_alpha"
                // The value should be a real number larger than 0
                if ($("#alpha_value_input_id").val() < 0) {
                    $("#alpha_value_input_id").val(0)
                    $("#alpha_value_warning_id").show()
                    is_alpha_correct_flag = true
                } else {
                    $("#alpha_min_input_id").val(Number(val_value_alpha))
                    $("#alpha_min_warning_id").hide()
                    is_alpha_correct_flag = true
                }
            }
        })

        $("#elastic_value_input_id").change(function(){
            var val_value_elastic = $("#elastic_value_input_id").val()
            if (!$.isNumeric(val_value_elastic)) {
                $("#elastic_value_input_id").val(val_value_elastic)
                $("#elastic_value_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                // Set input range for "value_elastic"
                // The value should be a real number larger than 0
                if ($("#elastic_value_input_id").val() < 0) {
                    $("#elastic_value_input_id").val(0)
                    $("#elastic_value_warning_id").show()
                    s_elastic_correct_flag = true
                } else {
                    $("#elastic_value_input_id").val(Number(val_value_elastic))
                    $("#elastic_value_warning_id").hide()
                    s_elastic_correct_flag = true
                }
            }
        })

        $("#rho_value_input_id").change(function(){
            var val_value_rho = $("#rho_value_input_id").val()
            if (!$.isNumeric(val_value_rho)) {
                $("#rho_value_input_id").val(val_value_rho)
                $("#rho_value_warning_id").show()
                is_rho_correct_flag = false
            } else {
                // Set input range for "value_rho"
                // The value should be a real number larger than 0
                if ($("#rho_value_input_id").val() < 0) {
                    $("#rho_value_input_id").val(0)
                    $("#rho_value_warning_id").show()
                    is_rho_correct_flag = true
                } else {
                    $("#rho_value_input_id").val(Number(val_value_rho))
                    $("#rho_value_warning_id").hide()
                    is_rho_correct_flag = true
                }
            }
        })

        $("#reg_value_input_id").change(function(){
            var val_value_reg = $("#reg_value_input_id").val()
            if (!$.isNumeric(val_value_reg)) {
                $("#reg_value_input_id").val(val_value_reg)
                $("#reg_value_warning_id").show()
                is_reg_correct_flag = false
            } else {
                // Set input range for "value_reg"
                // The value should be a real number larger than 0
                if ($("#reg_value_input_id").val() < 0) {
                    $("#reg_value_input_id").val(0)
                    $("#reg_value_warning_id").show()
                    is_reg_correct_flag = true
                } else {
                    $("#reg_value_input_id").val(Number(val_value_reg))
                    $("#reg_value_warning_id").hide()
                    is_reg_correct_flag = true
                }
            }
        })
    })

    // Changes will happen when "Prepro" is set
    $("#preprocess_selector_id").change(function(){
        // If choose "Origin"
        if($("#preprocess_selector_id").val() == "origin") {
            // Changes in "Prepro_num" input box
            $("#preprocess_number_input_id").attr("Disabled", "Disabled")
            $("#preprocess_number_input_id").val("")
        // If choose "Core" or "Filter"
        } else if ($("#preprocess_selector_id").val() == "core" || $("#preprocess_selector_id").val() == "filter") {
            // Changes in "Prepro_num" input box
            $("#preprocess_number_input_id").attr("Disabled", false)
            $("#preprocess_number_input_id").val(5)
        }
    })
    
    /* Binding start */
    // Changes will happen when "Test_method" is set
    $("#test_method_selector_id").change(function(){
        // Get index of current selected option
        var current_test_method_index = $('#test_method_selector_id').get(0).selectedIndex
        // Bind "Test_method" and "Val_method"
        // Principle: The order & options of "Test_method" and "Val_method" are totally same.
        $("#test_method_selector_id").get(0).selectedIndex = current_test_method_index
        $("#val_method_selector_id").get(0).selectedIndex = current_test_method_index

        // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are RLOO or TLOO
        // "Test_method" and "Val_method" are always the same.
        if($("#test_method_selector_id").val() == "rloo" || $("#test_method_selector_id").val() == "tloo") {
            $("#test_size_input_id").attr("Disabled", "Disabled")
            $("#val_size_input_id").attr("Disabled", "Disabled")

            $("#test_size_input_id").val("")
            $("#val_size_input_id").val("")
        } else {
            $("#test_size_input_id").attr("Disabled", false)
            $("#val_size_input_id").attr("Disabled", false)
            $("#test_size_input_id").val(0.2)
            $("#val_size_input_id").val(0.1)
        }
    })

    // Changes will happen when "Val_method" is set
    $("#val_method_selector_id").change(function(){
        // Get index of current selected option
        var current_val_method_index = $("#val_method_selector_id").get(0).selectedIndex
        // Bind "Test_method" and "Val_method"
        // Principle: The order & options of "Test_method" and "Val_method" are totally same.
        $("#val_method_selector_id").get(0).selectedIndex = current_val_method_index
        $("#test_method_selector_id").get(0).selectedIndex = current_val_method_index

        // "Test_size" and "Val_size" cannot be editted when "Test_method" and "Val_method" are set as RLOO or TLOO
        // "Test_method" and "Val_method" are always the same.
        if($("#val_method_selector_id").val() == "rloo" || $("#val_method_selector_id").val() == "tloo") {
            $("#val_size_input_id").attr("Disabled", "Disabled")
            $("#test_size_input_id").attr("Disabled", "Disabled")
            
            $("#val_size_input_id").val("")
            $("#test_size_input_id").val("")
        } else {
            $("#val_size_input_id").attr("Disabled", false)
            $("#test_size_input_id").attr("Disabled", false)
            $("#test_size_input_id").val(0.2)
            $("#val_size_input_id").val(0.1)
        }
    })
    /* Binding end */

    // Changes will happen when "Sample_method" is set
    $("#sample_method_selector_id").change(function(){
        // "Sample_ratio" cannot be editted when "Sample_method" is set as Uniform
        if($("#sample_method_selector_id").val() == "uniform") {
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")

            $("#sample_ratio_input_id").val("")
        } else {
            $("#sample_ratio_input_id").attr("Disabled", false)
            
            $("#sample_ratio_input_id").val(0.5)
        }
    })

    /* Changes in "Algo_name" start */
    /* Part 1 */
    // Changes will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
        if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf" || 
                $("#algo_name_selector_id").val() == "mf" || 
                $("#algo_name_selector_id").val() == "ngcf" || 
                $("#algo_name_selector_id").val() == "lightgcn"){
            // Changes in "Loss_type" selector
            $("#loss_type_selector_id").attr("Disabled", false)
            $("#loss_type_BPR").show()
            $("#loss_type_CL").show()
            $("#loss_type_HL").show()
            $("#loss_type_SL").show()
            $("#loss_type_TL").show()
            $("#loss_type_selector_id option[id='loss_type_CL']").attr("selected", "selected");
            $("#loss_type_selector_id").val("CL")
        // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
        } else if ($("#algo_name_selector_id").val() == "ease" || 
                $("#algo_name_selector_id").val() == "infae" || 
                $("#algo_name_selector_id").val() == "itemknn" || 
                $("#algo_name_selector_id").val() == "item2vec" || 
                $("#algo_name_selector_id").val() == "mostpop" || 
                $("#algo_name_selector_id").val() == "multi-vae" || 
                $("#algo_name_selector_id").val() == "puresvd" || 
                $("#algo_name_selector_id").val() == "slim") {
            // Changes in "Loss_type" selector
            $("#loss_type_selector_id").attr("Disabled", "Disabled")
            $("#loss_type_selector_id").val("")
        }
    })

    /* Part 2 */
    // Changes will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
        if ($("#algo_name_selector_id").val() == "ease" || 
                $("#algo_name_selector_id").val() == "itemknn" || 
                $("#algo_name_selector_id").val() == "mostpop" || 
                $("#algo_name_selector_id").val() == "puresvd" || 
                $("#algo_name_selector_id").val() == "slim"){
            // Changes in "Init_method" selector and "Optimizer" selector
            $("#init_method_selector_id").attr("Disabled", "Disabled")
            $("#optimizer_selector_id").attr("Disabled", "Disabled")
            $("#init_method_selector_id").val("")
            $("#optimizer_selector_id").val("")
        // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
        } else if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf" || 
                $("#algo_name_selector_id").val() == "infae" || 
                $("#algo_name_selector_id").val() == "item2vec" || 
                $("#algo_name_selector_id").val() == "mf" || 
                $("#algo_name_selector_id").val() == "multi-vae" || 
                $("#algo_name_selector_id").val() == "ngcf" || 
                $("#algo_name_selector_id").val() == "lightgcn") {
            // Changes in "Init_method" selector and "Optimizer" selector
            $("#init_method_selector_id").attr("Disabled", false)
            $("#optimizer_selector_id").attr("Disabled", false)

            $("#ini_method_Default").show()
            $("#ini_method_Normal").show()
            $("#ini_method_Uniform").show()
            $("#ini_method_Xavier_Normal").show()
            $("#ini_method_Xavier_Uniform").show()

            $("#optimizer_Default").show()
            $("#optimizer_AdaGrad").show()
            $("#optimizer_Adam").show()
            $("#optimizer_RMSProp").show()
            $("#optimizer_SGD").show()
            $("#optimizer_Sparse_adam").show()

            $("#init_method_selector_id option[id='ini_method_Default']").attr("selected", "selected")
            $("#optimizer_selector_id option[id='optimizer_Default']").attr("selected", "selected")
            $("#init_method_selector_id").val("default")
            $("#optimizer_selector_id").val("default")
        }
    })

    /* Part 3 */
    // Changes will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "FM", "NFM", "NeuMF", "MF", "NGCF" or "LightGCN"
        if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf" || 
                $("#algo_name_selector_id").val() == "mf" || 
                $("#algo_name_selector_id").val() == "ngcf" || 
                $("#algo_name_selector_id").val() == "lightgcn"){
            // Changes in "Sample_method" selector
            $("#sample_method_selector_id").attr("Disabled", false)
            $("#sam_method_Uniform").show()
            $("#sam_method_Low-Pop").show()
            $("#sam_method_High-Pop").show()
            $("#sample_method_selector_id option[id='sam_method_Uniform']").attr("selected", "selected");
            $("#sample_method_selector_id").val("uniform")
        // If choose "EASE", "InfAE", "ItemKNN", "Item2Vec", "MostPop", "Multi-VAE", PureSVD or "SLIM"
        } else if ($("#algo_name_selector_id").val() == "ease" || 
                $("#algo_name_selector_id").val() == "infae" || 
                $("#algo_name_selector_id").val() == "itemknn" || 
                $("#algo_name_selector_id").val() == "item2vec" || 
                $("#algo_name_selector_id").val() == "mostpop" || 
                $("#algo_name_selector_id").val() == "multi-vae" || 
                $("#algo_name_selector_id").val() == "puresvd" || 
                $("#algo_name_selector_id").val() == "slim") {
            // Changes in "Sample_method" selector
            $("#sample_method_selector_id").attr("Disabled", "Disabled")
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")
            $("#sample_method_selector_id").val("")
            $("#sample_ratio_input_id").val("")
        }
    })

    /* Part 4 */
    // Changes will happen when "Val_method" is set
    $("#val_method_selector_id").change(function(){
        // If choose "RLOO (Random Leave-one-out)" or "RSBR (Random Split-by-ratio)"
        if ($("#val_method_selector_id").val() == "rloo" || 
                $("#val_method_selector_id").val() == "rsbr"){
            // Changes in "Fold_num" input box
            $("#fold_num_input_id").attr("Disabled", false)
            $("#fold_num_input_id").val(1)
        // If choose "TLOO (Time-aware Leave-one-out)" or "TSBR (Time-aware Split-by-ratio)"
        } else if ($("#val_method_selector_id").val() == "tloo" || 
                $("#val_method_selector_id").val() == "tsbr") {
            // Changes in "Fold_num" input box
            $("#fold_num_input_id").attr("Disabled", "Disabled")
            $("#fold_num_input_id").val("")
        }
    })

    /* Part 5 */
    // Changes will happen when "Test_method" is set
    $("#test_method_selector_id").change(function(){
        // If choose "RLOO (Random Leave-one-out)" or "RSBR (Random Split-by-ratio)"
        if ($("#test_method_selector_id").val() == "rloo" || 
                $("#test_method_selector_id").val() == "rsbr"){
            // Changes in "Fold_num" input box
            $("#fold_num_input_id").attr("Disabled", false)
            $("#fold_num_input_id").val(1)
        // If choose "TLOO (Time-aware Leave-one-out)" or "TSBR (Time-aware Split-by-ratio)"
        } else if ($("#test_method_selector_id").val() == "tloo" || 
                $("#test_method_selector_id").val() == "tsbr") {
            // Changes in "Fold_num" input box
            $("#fold_num_input_id").attr("Disabled", "Disabled")
            $("#fold_num_input_id").val("")
        }
    })

    /* Part 6 */
    // Changes will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "EASE", "ItemKNN", "PureSVD" or "SLIM"
        if ($("#algo_name_selector_id").val() == "ease" || 
                $("#algo_name_selector_id").val() == "itemknn" || 
                $("#algo_name_selector_id").val() == "puresvd" || 
                $("#algo_name_selector_id").val() == "slim"){
            // Changes in "GPU" input box
            $("#gpu_input_id").attr("Disabled", "Disabled")
            $("#gpu_input_id").val("")
        // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
        } else if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf" || 
                $("#algo_name_selector_id").val() == "infae" || 
                $("#algo_name_selector_id").val() == "item2vec" || 
                $("#algo_name_selector_id").val() == "mf" || 
                $("#algo_name_selector_id").val() == "multi-vae" || 
                $("#algo_name_selector_id").val() == "ngcf" || 
                $("#algo_name_selector_id").val() == "lightgcn") {
            // Changes in "GPU" input box
            $("#gpu_input_id").attr("Disabled", false)
            $("#gpu_input_id").val("0")
        }
    })

    /* Part 7 */
    // Changes will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "EASE", "ItemKNN", "MostPop", "PureSVD" or "SLIM"
        if ($("#algo_name_selector_id").val() == "ease" || 
                $("#algo_name_selector_id").val() == "itemknn" || 
                $("#algo_name_selector_id").val() == "mostpop" || 
                $("#algo_name_selector_id").val() == "puresvd" || 
                $("#algo_name_selector_id").val() == "slim"){
            // Changes in "Early_stop" selector
            $("#early_stop_selector_id").attr("Disabled", "Disabled")
            $("#early_stop_selector_id").val("")
        // If choose "FM", "NFM", "NeuMF", "InfAE", "Item2Vec", "MF", "Multi-VAE", "NGCF" or "LightGCN"
        } else if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf" || 
                $("#algo_name_selector_id").val() == "infae" || 
                $("#algo_name_selector_id").val() == "item2vec" || 
                $("#algo_name_selector_id").val() == "mf" || 
                $("#algo_name_selector_id").val() == "multi-vae" || 
                $("#algo_name_selector_id").val() == "ngcf" || 
                $("#algo_name_selector_id").val() == "lightgcn") {
            // Changes in "Early_stop" selector
            $("#early_stop_selector_id").attr("Disabled", false)
            $("#early_stop_selector_id").val("True")
        }
    })
    /* Changes in "Algo_name" end */

    // Remove cursor in input box after press enter
    $(function(){
        $(document).on("keypress",function(e) {
            if(e.which == 13) {
                $("#hyperopt_trail_input_id").blur()
                $("#preprocess_number_input_id").blur()
                $("#topk_input_id").blur()
                $("#fold_num_input_id").blur()
                $("#epoch_input_id").blur()
                $("#test_size_input_id").blur()
                $("#val_size_input_id").blur()
                $("#cand_num_input_id").blur()
                $("#gpu_input_id").blur()
                $("#sample_ratio_input_id").blur()

                $("#batch_size_min_input_id").blur()
                $("#batch_size_max_input_id").blur()
                $("#batch_size_step_input_id").blur()
                $("#batch_size_choice_value_input_id").blur()
                $("#latent_dim_min_input_id").blur()
                $("#latent_dim_max_input_id").blur()
                $("#latent_dim_step_input_id").blur()
                $("#latent_dim_choice_value_input_id").blur()
                $("#dropout_min_input_id").blur()
                $("#dropout_max_input_id").blur()
                $("#dropout_step_input_id").blur()
                $("#dropout_choice_value_input_id").blur()
                $("#lr_min_input_id").blur()
                $("#lr_max_input_id").blur()
                $("#lr_step_input_id").blur()
                $("#lr_choice_value_input_id").blur()
                $("#anneal_cap_min_input_id").blur()
                $("#anneal_cap_max_input_id").blur()
                $("#anneal_cap_step_input_id").blur()
                $("#anneal_cap_choice_value_input_id").blur()
                $("#factors_min_input_id").blur()
                $("#factors_max_input_id").blur()
                $("#factors_step_input_id").blur()
                $("#factors_choice_value_input_id").blur()
                $("#num_ng_min_input_id").blur()
                $("#num_ng_max_input_id").blur()
                $("#num_ng_step_input_id").blur()
                $("#num_ng_choice_value_input_id").blur()
                $("#node_dropout_min_input_id").blur()
                $("#node_dropout_max_input_id").blur()
                $("#node_dropout_step_input_id").blur()
                $("#node_dropout_choice_value_input_id").blur()
                $("#mess_dropout_min_input_id").blur()
                $("#mess_dropout_max_input_id").blur()
                $("#mess_dropout_step_input_id").blur()
                $("#mess_dropout_choice_value_input_id").blur()
                $("#reg1_min_input_id").blur()
                $("#reg1_max_input_id").blur()
                $("#reg1_step_input_id").blur()
                $("#reg1_choice_value_input_id").blur()
                $("#reg2_min_input_id").blur()
                $("#reg2_max_input_id").blur()
                $("#reg2_step_input_id").blur()
                $("#reg2_choice_value_input_id").blur()
                $("#num_layers_min_input_id").blur()
                $("#num_layers_max_input_id").blur()
                $("#num_layers_step_input_id").blur()
                $("#num_layers_choice_value_input_id").blur()
                $("#maxk_min_input_id").blur()
                $("#maxk_max_input_id").blur()
                $("#maxk_step_input_id").blur()
                $("#maxk_choice_value_input_id").blur()
                $("#alpha_min_input_id").blur()
                $("#alpha_max_input_id").blur()
                $("#alpha_step_input_id").blur()
                $("#alpha_choice_value_input_id").blur()
                $("#elastic_min_input_id").blur()
                $("#elastic_max_input_id").blur()
                $("#elastic_step_input_id").blur()
                $("#elastic_choice_value_input_id").blur()
                $("#context_window_min_input_id").blur()
                $("#context_window_max_input_id").blur()
                $("#context_window_step_input_id").blur()
                $("#context_window_choice_value_input_id").blur()
                $("#rho_min_input_id").blur()
                $("#rho_max_input_id").blur()
                $("#rho_step_input_id").blur()
                $("#rho_choice_value_input_id").blur()
                $("#reg_min_input_id").blur()
                $("#reg_max_input_id").blur()
                $("#reg_step_input_id").blur()
                $("#reg_choice_value_input_id").blur()
            }
        })
    })
    
    // Check whether the input item is numeric or a number or an integer
    $("#hyperopt_trail_input_id").change(function(){
        var val_hyperopt_trail = $("#hyperopt_trail_input_id").val()
        test_val_hyperopt_trail = Number(val_hyperopt_trail)
        if (!Number.isInteger(test_val_hyperopt_trail)) {
            $("#hyperopt_trail_input_id").val(val_hyperopt_trail)
            $("#hyperopt_trail_warning_id").show()
        } else {
            $("#hyperopt_trail_input_id").val(Number(val_hyperopt_trail))
            $("#hyperopt_trail_warning_id").hide()
        }

        // Set input range for "HyperOPT_trail"
        // The value should be an integer larger than 0
        if ($("#hyperopt_trail_input_id").val() < 1) {
            $("#hyperopt_trail_input_id").val(1)
            $("#hyperopt_trail_warning_id").show()
        }
    })

    $("#preprocess_number_input_id").change(function(){
        var val_prepro_number = $("#preprocess_number_input_id").val()
        test_val_prepro_number = Number(val_prepro_number)
        if (!Number.isInteger(test_val_prepro_number) && $("#preprocess_selector_id").val() !== "origin") {
            $("#preprocess_number_input_id").val(val_prepro_number)
            $("#preprocess_number_warning_id").show()
        } else {
            $("#preprocess_number_input_id").val(Number(val_prepro_number))
            $("#preprocess_number_warning_id").hide()
        }

        // Set input range for "Prepro_number"
        // The value should be an integer larger than 0
        if ($("#preprocess_number_input_id").val() < 1) {
            $("#preprocess_number_input_id").val(1)
            $("#preprocess_number_warning_id").show()
        }
    })

    $("#topk_input_id").change(function(){
        var val_topk = $("#topk_input_id").val()
        test_val_topk = Number(val_topk)
        if (!Number.isInteger(test_val_topk)) {
            $("#topk_input_id").val(val_topk)
            $("#topk_warning_id").show()
        } else {
            $("#topk_input_id").val(Number(val_topk))
            $("#topk_warning_id").hide()
        }

        // Set input range for "Top-K"
        // The value should be an integer larger than 0
        if ($("#topk_input_id").val() < 1) {
            $("#topk_input_id").val(1)
            $("#topk_warning_id").show()
        }
    })

    $("#fold_num_input_id").change(function(){
        var val_fold_num = $("#fold_num_input_id").val()
        test_val_fold_num = Number(val_fold_num)
        if (!Number.isInteger(test_val_fold_num)) {
            $("#fold_num_input_id").val(val_fold_num)
            $("#fold_num_warning_id").show()
        } else {
            $("#fold_num_input_id").val(Number(val_fold_num))
            $("#fold_num_warning_id").hide()
        }

        // Set input range for "Fold_num"
        // The value should be an integer larger than 0
        if ($("#fold_num_input_id").val() < 1) {
            $("#fold_num_input_id").val(1)
            $("#fold_num_warning_id").show()
        }
    })

    $("#epoch_input_id").change(function(){
        var val_epoch = $("#epoch_input_id").val()
        test_val_epoch = Number(val_epoch)
        if (!Number.isInteger(test_val_epoch)) {
            $("#epoch_input_id").val(val_epoch)
            $("#epoch_warning_id").show()
        } else {
            $("#epoch_input_id").val(Number(val_epoch))
            $("#epoch_warning_id").hide()
        }

        // Set input range for "Epoch"
        // The value should be an integer larger than 0
        if ($("#epoch_input_id").val() < 1) {
            $("#epoch_input_id").val(1)
            $("#epoch_warning_id").show()
        }
    })
    
    $("#test_size_input_id").change(function(){
        var val_test_size = $("#test_size_input_id").val()
        // Disabled input box doesn't need to be check whether the value is valid or not.
        if (!$.isNumeric(val_test_size) && ($("#test_method_selector_id").val() !== "rloo" || $("#test_method_selector_id").val() !== "tloo")) {
            $("#test_size_input_id").val(val_test_size)
            $("#test_size_warning_id").show()
        } else {
            $("#test_size_input_id").val(Number(val_test_size))
            $("#test_size_warning_id").hide()
        }

        // Set input range for "Test_size"
        // The ratio range is [0, 1]
        if ($("#test_size_input_id").val() > 1) {
            $("#test_size_input_id").val(1)
            $("#test_size_warning_id").show()
        } else if ($("#test_size_input_id").val() < 0) {
            $("#test_size_input_id").val(0)
            $("#test_size_warning_id").show()
        }
    })

    $("#val_size_input_id").change(function(){
        var val_val_size = $("#val_size_input_id").val()
        // Disabled input box doesn't need to be check whether the value is valid or not.
        if (!$.isNumeric(val_val_size) && ($("#val_method_selector_id").val() !== "rloo" || $("#val_method_selector_id").val() !== "tloo")) {
            $("#val_size_input_id").val(val_val_size)
            $("#val_size_warning_id").show()
        } else {
            $("#val_size_input_id").val(Number(val_val_size))
            $("#val_size_warning_id").hide()
        }

        // Set input range for "Val_size"
        // The ratio range is [0, 1]
        if ($("#val_size_input_id").val() > 1) {
            $("#val_size_input_id").val("1")
            $("#val_size_warning_id").show()
        } else if ($("#val_size_input_id").val() < 0) {
            $("#val_size_input_id").val("0")
            $("#val_size_warning_id").show()
        }
    })

    $("#cand_num_input_id").change(function(){
        var val_cand_num = $("#cand_num_input_id").val()
        test_val_cand_num = Number(val_cand_num)
        if (!Number.isInteger(test_val_cand_num)) {
            $("#cand_num_input_id").val(val_cand_num)
            $("#cand_num_warning_id").show()
        } else {
            $("#cand_num_input_id").val(Number(val_cand_num))
            $("#cand_num_warning_id").hide()
        }

        // Set input range for "Cand_num"
        // The value should be an integer larger than 999
        if ($("#cand_num_input_id").val() < 1000) {
            $("#cand_num_input_id").val(1000)
            $("#cand_num_warning_id").show()
        }
    })
    
    $("#gpu_input_id").change(function(){
        $("#gpu_input_id").val()
    })

    $("#sample_ratio_input_id").change(function(){
        var val_sample_ratio = $("#sample_ratio_input_id").val()
        // Disabled input box doesn't need to be check whether the value is valid or not.
        if (!$.isNumeric(val_sample_ratio) && $("#sample_method_selector_id").val != "uniform") {
            $("#sample_ratio_input_id").val(val_sample_ratio)
            $("#sample_ratio_warning_id").show()
        } else {
            $("#sample_ratio_input_id").val(Number(val_sample_ratio))
            $("#sample_ratio_warning_id").hide()
        }

        // Set input range for "Sample_ratio"
        // The ratio range is [0, 1]
        if ($("#sample_ratio_input_id").val() > 1) {
            $("#sample_ratio_input_id").val(1)
            $("#sample_ratio_warning_id").show()
        } else if ($("#sample_ratio_input_id").val() < 0) {
            $("#sample_ratio_input_id").val(0)
            $("#sample_ratio_warning_id").show()
        }
    })

    // Changes if the first "Submit" button has been clicked
    $("#submit-btn1_id").click(function () {
        if ($("#submit-btn1_id").html() == "Submit") {
            if (Number.isInteger(Number($("#hyperopt_trail_input_id").val())) &&
                    ($("#preprocess_number_input_id").is(":disabled") || Number.isInteger(Number($("#preprocess_number_input_id").val()))) && 
                    Number.isInteger(Number($("#topk_input_id").val())) &&
                    ($("#fold_num_input_id").is(":disabled") || Number.isInteger(Number($("#fold_num_input_id").val()))) &&
                    ($("#test_size_input_id").is(":disabled") || $.isNumeric($("#test_size_input_id").val())) &&
                    ($("#val_size_input_id").is(":disabled") || $.isNumeric($("#val_size_input_id").val())) &&
                    Number.isInteger(Number($("#cand_num_input_id").val())) &&
                    ($("#sample_ratio_input_id").is(":disabled") || $.isNumeric($("#sample_ratio_input_id").val()))) {
                $("#page-title2_id").show()
                $("#second_card_id").show()
                $("html, body").animate({ scrollTop: $("#algo-specific-setting_id").offset().top }, 10)
                $("#submit-btn1_id").html("Reset");
                $("#submit-btn1_id").removeClass("btn btn-outline-primary").addClass("btn btn-outline-success")

                $("#optimization_metric_selector_id").attr("Disabled", "Disabled")
                $("#hyperopt_trail_input_id").attr("Disabled", "Disabled")
                $("#algo_name_selector_id").attr("Disabled", "Disabled")
                $("#dataset_selector_id").attr("Disabled", "Disabled")
                $("#preprocess_selector_id").attr("Disabled", "Disabled")
                $("#preprocess_number_input_id").attr("Disabled", "Disabled")
                $("#topk_input_id").attr("Disabled", "Disabled")
                $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#epoch_input_id").attr("Disabled", "Disabled")
                $("#test_size_input_id").attr("Disabled", "Disabled")
                $("#val_size_input_id").attr("Disabled", "Disabled")
                $("#cand_num_input_id").attr("Disabled", "Disabled")
                $("#gpu_input_id").attr("Disabled", "Disabled")
                $("#init_method_selector_id").attr("Disabled", "Disabled");
                $("#optimizer_selector_id").attr("Disabled", "Disabled");
                $("#early_stop_selector_id").attr("Disabled", "Disabled");
                $("#loss_type_selector_id").attr("Disabled", "Disabled");
                $("#test_method_selector_id").attr("Disabled", "Disabled")
                $("#val_method_selector_id").attr("Disabled", "Disabled")
                $("#sample_method_selector_id").attr("Disabled", "Disabled");
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")
            } else {
                sweetAlert("Error", "Notice: Exceptions to input parameters!!!", "error")
            }
        } else if ($("#submit-btn1_id").html() == "Reset") {
            $("html, body").animate({ scrollTop: 0 }, 10)
            $("#submit-btn1_id").html("Submit")
            $("#submit-btn1_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
            
            // Initialize the webpage
            $("#optimization_metric_selector_id").attr("Disabled", false)
            $("#optimization_metric_selector_id").val("ndcg")
            $("#algo_name_selector_id").attr("Disabled", false)
            $("#algo_name_selector_id").val("multi-vae")
            $("#dataset_selector_id").attr("Disabled", false)
            $("#dataset_selector_id").val("ml-100k")
            $("#preprocess_selector_id").attr("Disabled", false)
            $("#preprocess_selector_id").val("origin")
            $("#test_method_selector_id").attr("Disabled", false)
            $("#test_method_selector_id").val("tsbr")
            $("#val_method_selector_id").attr("Disabled", false)
            $("#val_method_selector_id").val("tsbr")
            $("#sample_method_selector_id").attr("Disabled", "Disabled")
            $("#sample_method_selector_id").val("");
            $("#init_method_selector_id").attr("Disabled", false)
            $("#init_method_selector_id").val("default");
            $("#optimizer_selector_id").attr("Disabled", false)
            $("#optimizer_selector_id").val("default");
            $("#early_stop_selector_id").attr("Disabled", false)
            $("#early_stop_selector_id").val("True");
            $("#loss_type_selector_id").attr("Disabled", "Disabled");
            $("#loss_type_selector_id").val("")

            $("#hyperopt_trail_input_id").attr("Disabled", false)
            $("#hyperopt_trail_input_id").val(20)
                $("#hyperopt_trail_warning_id").hide()
            $("#preprocess_number_input_id").attr("Disabled", "Disabled")
            $("#preprocess_number_input_id").val("")
                $("#preprocess_number_warning_id").hide()
            $("#test_size_input_id").attr("Disabled", false)
            $("#test_size_input_id").val(0.2)
                $("#test_size_warning_id").hide()
            $("#val_size_input_id").attr("Disabled", false)
            $("#val_size_input_id").val(0.1)
                $("#val_size_warning_id").hide()
            $("#topk_input_id").attr("Disabled", false)
            $("#topk_input_id").val(50)
                $("#topk_warning_id").hide()
            $("#fold_num_input_id").attr("Disabled", "Disabled")
            $("#fold_num_input_id").val("")
                $("#fold_num_warning_id").hide()
            $("#epoch_input_id").attr("Disabled", false)
            $("#epoch_input_id").val(50)
                $("#epoch_warning_id").hide()
            $("#cand_num_input_id").attr("Disabled", false)
            $("#cand_num_input_id").val(1000)
                $("#cand_num_warning_id").hide()
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")
            $("#sample_ratio_input_id").val("")
                $("#sample_ratio_warning_id").hide()
            $("#gpu_input_id").attr("Disabled", false)
            $("#gpu_input_id").val("0")

            $("#batch_size_int_id").hide()
            $("#batch_size_int_choice_id").hide()
            $("#batch_size_space_id").hide()
            $("#batch_size_group_id").hide()
            $("#batch_size_choice_group_id").hide()
            $("#latent_dim_int_id").hide()
            $("#latent_dim_int_choice_id").hide()
            $("#latent_dim_space_id").hide()
            $("#latent_dim_group_id").hide()
            $("#latent_dim_choice_group_id").hide()
            $("#dropout_float_id").hide()
            $("#dropout_float_choice_id").hide()
            $("#dropout_space_id").hide()
            $("#dropout_group_id").hide()
            $("#dropout_choice_group_id").hide()
            $("#lr_float_id").hide()
            $("#lr_float_choice_id").hide()
            $("#lr_space_id").hide()
            $("#lr_group_id").hide()
            $("#lr_choice_group_id").hide()
            $("#anneal_cap_float_id").hide()
            $("#anneal_cap_float_choice_id").hide()
            $("#anneal_cap_space_id").hide()
            $("#anneal_cap_group_id").hide()
            $("#anneal_cap_choice_group_id").hide()
            $("#factors_int_id").hide()
            $("#factors_int_choice_id").hide()
            $("#factors_space_id").hide()
            $("#factors_group_id").hide()
            $("#factors_choice_group_id").hide()
            $("#num_ng_int_id").hide()
            $("#num_ng_int_choice_id").hide()
            $("#num_ng_space_id").hide()
            $("#num_ng_group_id").hide()
            $("#num_ng_choice_group_id").hide()
            $("#node_dropout_float_id").hide()
            $("#node_dropout_float_choice_id").hide()
            $("#node_dropout_space_id").hide()
            $("#node_dropout_group_id").hide()
            $("#node_dropout_choice_group_id").hide()
            $("#mess_dropout_float_id").hide()
            $("#mess_dropout_float_choice_id").hide()
            $("#mess_dropout_space_id").hide()
            $("#mess_dropout_group_id").hide()
            $("#mess_dropout_choice_group_id").hide()
            $("#reg1_float_id").hide()
            $("#reg1_float_choice_id").hide()
            $("#reg1_space_id").hide()
            $("#reg1_group_id").hide()
            $("#reg1_choice_group_id").hide()
            $("#reg2_float_id").hide()
            $("#reg2_float_choice_id").hide()
            $("#reg2_space_id").hide()
            $("#reg2_group_id").hide()
            $("#reg2_choice_group_id").hide()
            $("#num_layers_int_id").hide()
            $("#num_layers_int_choice_id").hide()
            $("#num_layers_space_id").hide()
            $("#num_layers_group_id").hide()
            $("#num_layers_choice_group_id").hide()
            $("#maxk_int_id").hide()
            $("#maxk_int_choice_id").hide()
            $("#maxk_space_id").hide()
            $("#maxk_group_id").hide()
            $("#maxk_choice_group_id").hide()
            $("#alpha_float_id").hide()
            $("#alpha_float_choice_id").hide()
            $("#alpha_space_id").hide()
            $("#alpha_group_id").hide()
            $("#alpha_choice_group_id").hide()
            $("#elastic_float_id").hide()
            $("#elastic_float_choice_id").hide()
            $("#elastic_space_id").hide()
            $("#elastic_group_id").hide()
            $("#elastic_choice_group_id").hide()
            $("#context_window_int_id").hide()
            $("#context_window_int_choice_id").hide()
            $("#context_window_space_id").hide()
            $("#context_window_group_id").hide()
            $("#context_window_choice_group_id").hide()
            $("#rho_float_id").hide()
            $("#rho_float_choice_id").hide()
            $("#rho_space_id").hide()
            $("#rho_group_id").hide()
            $("#rho_choice_group_id").hide()
            $("#reg_float_id").hide()
            $("#reg_float_choice_id").hide()
            $("#reg_space_id").hide()
            $("#reg_group_id").hide()
            $("#reg_choice_group_id").hide()

            $("#batch_size_checkbox_id").prop("checked", false)
            $("#latent_dim_checkbox_id").prop("checked", false)
            $("#dropout_checkbox_id").prop("checked", false)
            $("#lr_checkbox_id").prop("checked", false)
            $("#anneal_cap_checkbox_id").prop("checked", false)
            $("#factors_checkbox_id").prop("checked", false)
            $("#num_ng_checkbox_id").prop("checked", false)
            $("#node_dropout_checkbox_id").prop("checked", false)
            $("#mess_dropout_checkbox_id").prop("checked", false)
            $("#reg1_checkbox_id").prop("checked", false)
            $("#reg2_checkbox_id").prop("checked", false)
            $("#num_layers_checkbox_id").prop("checked", false)
            $("#maxk_checkbox_id").prop("checked", false)
            $("#alpha_checkbox_id").prop("checked", false)
            $("#elastic_checkbox_id").prop("checked", false)
            $("#context_window_checkbox_id").prop("checked", false)
            $("#rho_checkbox_id").prop("checked", false)
            $("#reg_checkbox_id").prop("checked", false)

            $("#batch_size_int_checkbox_id").prop("checked", false)
            $("#batch_size_int_choice_checkbox_id").prop("checked", false)
            $("#latent_dim_int_checkbox_id").prop("checked", false)
            $("#latent_dim_int_choice_checkbox_id").prop("checked", false)
            $("#dropout_float_checkbox_id").prop("checked", false)
            $("#dropout_float_choice_checkbox_id").prop("checked", false)
            $("#lr_float_checkbox_id").prop("checked", false)
            $("#lr_float_choice_checkbox_id").prop("checked", false)
            $("#anneal_cap_float_checkbox_id").prop("checked", false)
            $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)
            $("#factors_int_checkbox_id").prop("checked", false)
            $("#factors_int_choice_checkbox_id").prop("checked", false)
            $("#num_ng_int_checkbox_id").prop("checked", false)
            $("#num_ng_int_choice_checkbox_id").prop("checked", false)
            $("#node_dropout_float_checkbox_id").prop("checked", false)
            $("#node_dropout_float_choice_checkbox_id").prop("checked", false)
            $("#mess_dropout_float_checkbox_id").prop("checked", false)
            $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)
            $("#reg1_float_checkbox_id").prop("checked", false)
            $("#reg1_float_choice_checkbox_id").prop("checked", false)
            $("#reg2_float_checkbox_id").prop("checked", false)
            $("#reg2_float_choice_checkbox_id").prop("checked", false)
            $("#num_layers_int_checkbox_id").prop("checked", false)
            $("#num_layers_int_choice_checkbox_id").prop("checked", false)
            $("#maxk_int_checkbox_id").prop("checked", false)
            $("#maxk_int_choice_checkbox_id").prop("checked", false)
            $("#alpha_float_checkbox_id").prop("checked", false)
            $("#alpha_float_choice_checkbox_id").prop("checked", false)
            $("#elastic_float_checkbox_id").prop("checked", false)
            $("#elastic_float_choice_checkbox_id").prop("checked", false)
            $("#context_window_int_checkbox_id").prop("checked", false)
            $("#context_window_int_choice_checkbox_id").prop("checked", false)
            $("#rho_float_checkbox_id").prop("checked", false)
            $("#rho_float_choice_checkbox_id").prop("checked", false)
            $("#reg_float_checkbox_id").prop("checked", false)
            $("#reg_float_choice_checkbox_id").prop("checked", false)

            $("#batch_size_min_warning_id").hide()
            $("#batch_size_max_warning_id").hide()
            $("#batch_size_step_warning_id").hide()
            $("#batch_size_choice_value_warning_id").hide()
            $("#latent_dim_min_warning_id").hide()
            $("#latent_dim_max_warning_id").hide()
            $("#latent_dim_step_warning_id").hide()
            $("#latent_dim_choice_value_warning_id").hide()
            $("#factors_min_warning_id").hide()
            $("#factors_max_warning_id").hide()
            $("#factors_step_warning_id").hide()
            $("#factors_choice_value_warning_id").hide()
            $("#num_ng_min_warning_id").hide()
            $("#num_ng_max_warning_id").hide()
            $("#num_ng_step_warning_id").hide()
            $("#num_ng_choice_value_warning_id").hide()
            $("#num_layers_min_warning_id").hide()
            $("#num_layers_max_warning_id").hide()
            $("#num_layers_step_warning_id").hide()
            $("#num_layers_choice_value_warning_id").hide()
            $("#maxk_min_warning_id").hide()
            $("#maxk_max_warning_id").hide()
            $("#maxk_step_warning_id").hide()
            $("#maxk_choice_value_warning_id").hide()
            $("#context_window_min_warning_id").hide()
            $("#context_window_max_warning_id").hide()
            $("#context_window_step_warning_id").hide()
            $("#context_window_choice_value_warning_id").hide()

            $("#dropout_min_warning_id").hide()
            $("#dropout_max_warning_id").hide()
            $("#dropout_step_warning_id").hide()
            $("#dropout_choice_value_warning_id").hide()
            $("#node_dropout_min_warning_id").hide()
            $("#node_dropout_max_warning_id").hide()
            $("#node_dropout_step_warning_id").hide()
            $("#node_dropout_choice_value_warning_id").hide()
            $("#mess_dropout_min_warning_id").hide()
            $("#mess_dropout_max_warning_id").hide()
            $("#mess_dropout_step_warning_id").hide()
            $("#mess_dropout_choice_value_warning_id").hide()

            $("#lr_min_warning_id").hide()
            $("#lr_max_warning_id").hide()
            $("#lr_step_warning_id").hide()
            $("#lr_choice_value_warning_id").hide()
            $("#anneal_cap_min_warning_id").hide()
            $("#anneal_cap_max_warning_id").hide()
            $("#anneal_cap_step_warning_id").hide()
            $("#anneal_cap_choice_value_warning_id").hide()
            $("#reg1_min_warning_id").hide()
            $("#reg1_max_warning_id").hide()
            $("#reg1_step_warning_id").hide()
            $("#reg1_choice_value_warning_id").hide()
            $("#reg2_min_warning_id").hide()
            $("#reg2_max_warning_id").hide()
            $("#reg2_step_warning_id").hide()
            $("#reg2_choice_value_warning_id").hide()
            $("#alpha_min_warning_id").hide()
            $("#alpha_max_warning_id").hide()
            $("#alpha_step_warning_id").hide()
            $("#alpha_choice_value_warning_id").hide()
            $("#elastic_min_warning_id").hide()
            $("#elastic_max_warning_id").hide()
            $("#elastic_step_warning_id").hide()
            $("#elastic_choice_value_warning_id").hide()
            $("#rho_min_warning_id").hide()
            $("#rho_max_warning_id").hide()
            $("#rho_step_warning_id").hide()
            $("#rho_choice_value_warning_id").hide()
            $("#reg_min_warning_id").hide()
            $("#reg_max_warning_id").hide()
            $("#reg_step_warning_id").hide()
            $("#reg_choice_value_warning_id").hide()

            setTimeout(function () {
                $("#page-title2_id").hide()
                $("#second_card_id").hide()
            }, 1000);
        }
    });

    // Algorithm Specific Settings Part
    // Algo-setting initialization
    if (!is_test_flag) {
        // batch_size
        $("#batch_size_checkbox_id").change(function() {
            if ($("#batch_size_checkbox_id")[0].checked) {
                $("#batch_size_int_id").show()
                $("#batch_size_int_choice_id").show()

                $("#batch_size_int_checkbox_id").prop("checked", true)
                $("#batch_size_int_choice_checkbox_id").prop("checked", false)

                $("#batch_size_space_id").show()
                $("#batch_size_group_id").show()
                $("#batch_size_choice_group_id").hide()
    
                $("#batch_size_tune1_id").show()
                $("#batch_size_tune2_id").show()
                $("#batch_size_tune3_id").show()
                $("#batch_size_test_id").hide()
    
                $("#batch_size_min_input_id").val(128)
                $("#batch_size_max_input_id").val(512)
                $("#batch_size_step_input_id").val("")
    
                $("#batch_size_min_warning_id").hide()
                $("#batch_size_max_warning_id").hide()
                $("#batch_size_step_warning_id").hide()
            } else {
                $("#batch_size_int_id").hide()
                $("#batch_size_int_choice_id").hide()

                $("#batch_size_int_checkbox_id").prop("checked", false)
                $("#batch_size_int_choice_checkbox_id").prop("checked", false)

                $("#batch_size_space_id").hide()
                $("#batch_size_group_id").hide()
                $("#batch_size_choice_group_id").hide()
            }
        })

        $("#batch_size_int_checkbox_id").change(function() {
            if ($("#batch_size_int_checkbox_id")[0].checked) {
                is_batch_size_choice_flag = false
                $("#batch_size_int_choice_checkbox_id").prop("checked", false)
    
                $("#batch_size_space_id").show()
                $("#batch_size_group_id").show()
                $("#batch_size_choice_group_id").hide()
    
                $("#batch_size_tune1_id").show()
                $("#batch_size_tune2_id").show()
                $("#batch_size_tune3_id").show()
                $("#batch_size_test_id").hide()
    
                $("#batch_size_min_input_id").val(128)
                $("#batch_size_max_input_id").val(512)
                $("#batch_size_step_input_id").val("")
    
                $("#batch_size_min_warning_id").hide()
                $("#batch_size_max_warning_id").hide()
                $("#batch_size_step_warning_id").hide()
            }
        })

        $("#batch_size_int_choice_checkbox_id").change(function() {
            if ($("#batch_size_int_choice_checkbox_id")[0].checked) {
                is_batch_size_choice_flag = true
                $("#batch_size_int_checkbox_id").prop("checked", false)
    
                $("#batch_size_space_id").show()
                $("#batch_size_group_id").hide()
                $("#batch_size_choice_group_id").show()
    
                $("#batch_size_tune1_id").hide()
                $("#batch_size_tune2_id").hide()
                $("#batch_size_tune3_id").hide()
                $("#batch_size_test_id").hide()
    
                $("#batch_size_choice_value_input_id").val("128, 256, 512")
    
                $("#batch_size_choice_value_warning_id").hide()
            }
        })

        // latent_dim
        $("#latent_dim_checkbox_id").change(function() {
            if ($("#latent_dim_checkbox_id")[0].checked) {
                $("#latent_dim_int_id").show()
                $("#latent_dim_int_choice_id").show()

                $("#latent_dim_int_checkbox_id").prop("checked", true)
                $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                $("#latent_dim_space_id").show()
                $("#latent_dim_group_id").show()
                $("#latent_dim_choice_group_id").hide()

                $("#latent_dim_tune1_id").show()
                $("#latent_dim_tune2_id").show()
                $("#latent_dim_tune3_id").show()
                $("#latent_dim_test_id").hide()

                $("#latent_dim_min_input_id").val(64)
                $("#latent_dim_max_input_id").val(256)
                $("#latent_dim_step_input_id").val("")

                $("#latent_dim_min_warning_id").hide()
                $("#latent_dim_max_warning_id").hide()
                $("#latent_dim_step_warning_id").hide()
            } else {
                $("#latent_dim_int_id").hide()
                $("#latent_dim_int_choice_id").hide()

                $("#latent_dim_int_checkbox_id").prop("checked", false)
                $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                $("#latent_dim_space_id").hide()
                $("#latent_dim_group_id").hide()
                $("#latent_dim_choice_group_id").hide()
            }
        })

        $("#latent_dim_int_checkbox_id").change(function() {
            if ($("#latent_dim_int_checkbox_id")[0].checked) {
                is_latent_dim_choice_flag = false
                $("#latent_dim_int_choice_checkbox_id").prop("checked", false)

                $("#latent_dim_space_id").show()
                $("#latent_dim_group_id").show()
                $("#latent_dim_choice_group_id").hide()

                $("#latent_dim_tune1_id").show()
                $("#latent_dim_tune2_id").show()
                $("#latent_dim_tune3_id").show()
                $("#latent_dim_test_id").hide()

                $("#latent_dim_min_input_id").val(64)
                $("#latent_dim_max_input_id").val(256)
                $("#latent_dim_step_input_id").val("")

                $("#latent_dim_min_warning_id").hide()
                $("#latent_dim_max_warning_id").hide()
                $("#latent_dim_step_warning_id").hide()
            }
        })

        $("#latent_dim_int_choice_checkbox_id").change(function() {
            if ($("#latent_dim_int_choice_checkbox_id")[0].checked) {
                is_latent_dim_choice_flag = true
                $("#latent_dim_int_checkbox_id").prop("checked", false)

                $("#latent_dim_space_id").show()
                $("#latent_dim_group_id").hide()
                $("#latent_dim_choice_group_id").show()

                $("#latent_dim_tune1_id").hide()
                $("#latent_dim_tune2_id").hide()
                $("#latent_dim_tune3_id").hide()
                $("#latent_dim_test_id").hide()

                $("#latent_dim_choice_value_input_id").val("64, 160, 256")

                $("#latent_dim_choice_value_warning_id").hide()
            }
        })

        // dropout
        $("#dropout_checkbox_id").change(function() {
            if ($("#dropout_checkbox_id")[0].checked) {
                $("#dropout_float_id").show()
                $("#dropout_float_choice_id").show()

                $("#dropout_float_checkbox_id").prop("checked", true)
                $("#dropout_float_choice_checkbox_id").prop("checked", false)

                $("#dropout_space_id").show()
                $("#dropout_group_id").show()
                $("#dropout_choice_group_id").hide()

                $("#dropout_tune1_id").show()
                $("#dropout_tune2_id").show()
                $("#dropout_tune3_id").show()
                $("#dropout_test_id").hide()

                $("#dropout_min_input_id").val(0.1)
                $("#dropout_max_input_id").val(0.9)
                $("#dropout_step_input_id").val("")

                $("#dropout_min_warning_id").hide()
                $("#dropout_max_warning_id").hide()
                $("#dropout_step_warning_id").hide()
            } else {
                $("#dropout_float_id").hide()
                $("#dropout_float_choice_id").hide()

                $("#dropout_float_checkbox_id").prop("checked", false)
                $("#dropout_float_choice_checkbox_id").prop("checked", false)

                $("#dropout_space_id").hide()
                $("#dropout_group_id").hide()
                $("#dropout_choice_group_id").hide()
            }
        })

        $("#dropout_float_checkbox_id").change(function() {
            if ($("#dropout_float_checkbox_id")[0].checked) {
                is_dropout_choice_flag = false
                $("#dropout_float_choice_checkbox_id").prop("checked", false)

                $("#dropout_space_id").show()
                $("#dropout_group_id").show()
                $("#dropout_choice_group_id").hide()

                $("#dropout_tune1_id").show()
                $("#dropout_tune2_id").show()
                $("#dropout_tune3_id").show()
                $("#dropout_test_id").hide()

                $("#dropout_min_input_id").val(0.1)
                $("#dropout_max_input_id").val(0.9)
                $("#dropout_step_input_id").val("")

                $("#dropout_min_warning_id").hide()
                $("#dropout_max_warning_id").hide()
                $("#dropout_step_warning_id").hide()
            }
        })

        $("#dropout_float_choice_checkbox_id").change(function() {
            if ($("#dropout_float_choice_checkbox_id")[0].checked) {
                is_dropout_choice_flag = true
                $("#dropout_float_checkbox_id").prop("checked", false)

                $("#dropout_space_id").show()
                $("#dropout_group_id").hide()
                $("#dropout_choice_group_id").show()

                $("#dropout_tune1_id").hide()
                $("#dropout_tune2_id").hide()
                $("#dropout_tune3_id").hide()
                $("#dropout_test_id").hide()

                $("#dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                $("#dropout_choice_value_warning_id").hide()
            }
        })

        // lr
        $("#lr_checkbox_id").change(function() {
            if ($("#lr_checkbox_id")[0].checked) {
                $("#lr_float_id").show()
                $("#lr_float_choice_id").show()

                $("#lr_float_checkbox_id").prop("checked", true)
                $("#lr_float_choice_checkbox_id").prop("checked", false)

                $("#lr_space_id").show()
                $("#lr_group_id").show()
                $("#lr_choice_group_id").hide()

                $("#lr_tune1_id").show()
                $("#lr_tune2_id").show()
                $("#lr_tune3_id").show()
                $("#lr_test_id").hide()

                $("#lr_min_input_id").val(0.001)
                $("#lr_max_input_id").val(0.01)
                $("#lr_step_input_id").val("")

                $("#lr_min_warning_id").hide()
                $("#lr_max_warning_id").hide()
                $("#lr_step_warning_id").hide()
            } else {
                $("#lr_float_id").hide()
                $("#lr_float_choice_id").hide()

                $("#lr_float_checkbox_id").prop("checked", false)
                $("#lr_float_choice_checkbox_id").prop("checked", false)

                $("#lr_space_id").hide()
                $("#lr_group_id").hide()
                $("#lr_choice_group_id").hide()
            }
        })

        $("#lr_float_checkbox_id").change(function() {
            if ($("#lr_float_checkbox_id")[0].checked) {
                is_lr_choice_flag = false
                $("#lr_float_choice_checkbox_id").prop("checked", false)

                $("#lr_space_id").show()
                $("#lr_group_id").show()
                $("#lr_choice_group_id").hide()

                $("#lr_tune1_id").show()
                $("#lr_tune2_id").show()
                $("#lr_tune3_id").show()
                $("#lr_test_id").hide()

                $("#lr_min_input_id").val(0.001)
                $("#lr_max_input_id").val(0.01)
                $("#lr_step_input_id").val("")

                $("#lr_min_warning_id").hide()
                $("#lr_max_warning_id").hide()
                $("#lr_step_warning_id").hide()
            }
        })

        $("#lr_float_choice_checkbox_id").change(function() {
            if ($("#lr_float_choice_checkbox_id")[0].checked) {
                is_lr_choice_flag = true
                $("#lr_float_checkbox_id").prop("checked", false)

                $("#lr_space_id").show()
                $("#lr_group_id").hide()
                $("#lr_choice_group_id").show()

                $("#lr_tune1_id").hide()
                $("#lr_tune2_id").hide()
                $("#lr_tune3_id").hide()
                $("#lr_test_id").hide()

                $("#lr_choice_value_input_id").val("0.001, 0.005, 0.01")

                $("#lr_choice_value_warning_id").hide()
            }
        })

        // anneal_cap
        $("#anneal_cap_checkbox_id").change(function() {
            if ($("#anneal_cap_checkbox_id")[0].checked) {
                $("#anneal_cap_float_id").show()
                $("#anneal_cap_float_choice_id").show()

                $("#anneal_cap_float_checkbox_id").prop("checked", true)
                $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                $("#anneal_cap_space_id").show()
                $("#anneal_cap_group_id").show()
                $("#anneal_cap_choice_group_id").hide()

                $("#anneal_cap_tune1_id").show()
                $("#anneal_cap_tune2_id").show()
                $("#anneal_cap_tune3_id").show()
                $("#anneal_cap_test_id").hide()

                $("#anneal_cap_min_input_id").val(0.1)
                $("#anneal_cap_max_input_id").val(1)
                $("#anneal_cap_step_input_id").val("")

                $("#anneal_cap_min_warning_id").hide()
                $("#anneal_cap_max_warning_id").hide()
                $("#anneal_cap_step_warning_id").hide()
            } else {
                $("#anneal_cap_float_id").hide()
                $("#anneal_cap_float_choice_id").hide()

                $("#anneal_cap_float_checkbox_id").prop("checked", false)
                $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                $("#anneal_cap_space_id").hide()
                $("#anneal_cap_group_id").hide()
                $("#anneal_cap_choice_group_id").hide()
            }
        })

        $("#anneal_cap_float_checkbox_id").change(function() {
            if ($("#anneal_cap_float_checkbox_id")[0].checked) {
                is_anneal_cap_choice_flag = false
                $("#anneal_cap_float_choice_checkbox_id").prop("checked", false)

                $("#anneal_cap_space_id").show()
                $("#anneal_cap_group_id").show()
                $("#anneal_cap_choice_group_id").hide()

                $("#anneal_cap_tune1_id").show()
                $("#anneal_cap_tune2_id").show()
                $("#anneal_cap_tune3_id").show()
                $("#anneal_cap_test_id").hide()

                $("#anneal_cap_min_input_id").val(0.1)
                $("#anneal_cap_max_input_id").val(1)
                $("#anneal_cap_step_input_id").val("")

                $("#anneal_cap_min_warning_id").hide()
                $("#anneal_cap_max_warning_id").hide()
                $("#anneal_cap_step_warning_id").hide()
            }
        })

        $("#anneal_cap_float_choice_checkbox_id").change(function() {
            if ($("#anneal_cap_float_choice_checkbox_id")[0].checked) {
                is_anneal_cap_choice_flag = true
                $("#anneal_cap_float_checkbox_id").prop("checked", false)

                $("#anneal_cap_space_id").show()
                $("#anneal_cap_group_id").hide()
                $("#anneal_cap_choice_group_id").show()

                $("#anneal_cap_tune1_id").hide()
                $("#anneal_cap_tune2_id").hide()
                $("#anneal_cap_tune3_id").hide()
                $("#anneal_cap_test_id").hide()

                $("#anneal_cap_choice_value_input_id").val("0.1, 0.5, 1")

                $("#anneal_cap_choice_value_warning_id").hide()
            }
        })

        // factors
        $("#factors_checkbox_id").change(function() {
            if ($("#factors_checkbox_id")[0].checked) {
                $("#factors_int_id").show()
                $("#factors_int_choice_id").show()

                $("#factors_int_checkbox_id").prop("checked", true)
                $("#factors_int_choice_checkbox_id").prop("checked", false)

                $("#factors_space_id").show()
                $("#factors_group_id").show()
                $("#factors_choice_group_id").hide()

                $("#factors_tune1_id").show()
                $("#factors_tune2_id").show()
                $("#factors_tune3_id").show()
                $("#factors_test_id").hide()

                $("#factors_min_input_id").val(20)
                $("#factors_max_input_id").val(100)
                $("#factors_step_input_id").val("")

                $("#factors_min_warning_id").hide()
                $("#factors_max_warning_id").hide()
                $("#factors_step_warning_id").hide()
            } else {
                $("#factors_int_id").hide()
                $("#factors_int_choice_id").hide()

                $("#factors_int_checkbox_id").prop("checked", false)
                $("#factors_int_choice_checkbox_id").prop("checked", false)

                $("#factors_space_id").hide()
                $("#factors_group_id").hide()
                $("#factors_choice_group_id").hide()
            }
        })

        $("#factors_int_checkbox_id").change(function() {
            if ($("#factors_int_checkbox_id")[0].checked) {
                is_factors_choice_flag = false
                $("#factors_int_choice_checkbox_id").prop("checked", false)

                $("#factors_space_id").show()
                $("#factors_group_id").show()
                $("#factors_choice_group_id").hide()

                $("#factors_tune1_id").show()
                $("#factors_tune2_id").show()
                $("#factors_tune3_id").show()
                $("#factors_test_id").hide()

                $("#factors_min_input_id").val(20)
                $("#factors_max_input_id").val(100)
                $("#factors_step_input_id").val("")

                $("#factors_min_warning_id").hide()
                $("#factors_max_warning_id").hide()
                $("#factors_step_warning_id").hide()
            }
        })

        $("#factors_int_choice_checkbox_id").change(function() {
            if ($("#factors_int_choice_checkbox_id")[0].checked) {
                is_factors_choice_flag = true
                $("#factors_int_checkbox_id").prop("checked", false)

                $("#factors_space_id").show()
                $("#factors_group_id").hide()
                $("#factors_choice_group_id").show()

                $("#factors_tune1_id").hide()
                $("#factors_tune2_id").hide()
                $("#factors_tune3_id").hide()
                $("#factors_test_id").hide()

                $("#factors_choice_value_input_id").val("20, 60, 100")

                $("#factors_choice_value_warning_id").hide()
            }
        })

        // num_ng
        $("#num_ng_checkbox_id").change(function() {
            if ($("#num_ng_checkbox_id")[0].checked) {
                $("#num_ng_int_id").show()
                $("#num_ng_int_choice_id").show()

                $("#num_ng_int_checkbox_id").prop("checked", true)
                $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                $("#num_ng_space_id").show()
                $("#num_ng_group_id").show()
                $("#num_ng_choice_group_id").hide()

                $("#num_ng_tune1_id").show()
                $("#num_ng_tune2_id").show()
                $("#num_ng_tune3_id").show()
                $("#num_ng_test_id").hide()

                $("#num_ng_min_input_id").val(1)
                $("#num_ng_max_input_id").val(4)
                $("#num_ng_step_input_id").val("")

                $("#num_ng_min_warning_id").hide()
                $("#num_ng_max_warning_id").hide()
                $("#num_ng_step_warning_id").hide()
            } else {
                $("#num_ng_int_id").hide()
                $("#num_ng_int_choice_id").hide()

                $("#num_ng_int_checkbox_id").prop("checked", false)
                $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                $("#num_ng_space_id").hide()
                $("#num_ng_group_id").hide()
                $("#num_ng_choice_group_id").hide()
            }
        })

        $("#num_ng_int_checkbox_id").change(function() {
            if ($("#num_ng_int_checkbox_id")[0].checked) {
                is_num_ng_choice_flag = false
                $("#num_ng_int_choice_checkbox_id").prop("checked", false)

                $("#num_ng_space_id").show()
                $("#num_ng_group_id").show()
                $("#num_ng_choice_group_id").hide()

                $("#num_ng_tune1_id").show()
                $("#num_ng_tune2_id").show()
                $("#num_ng_tune3_id").show()
                $("#num_ng_test_id").hide()

                $("#num_ng_min_input_id").val(1)
                $("#num_ng_max_input_id").val(4)
                $("#num_ng_step_input_id").val("")

                $("#num_ng_min_warning_id").hide()
                $("#num_ng_max_warning_id").hide()
                $("#num_ng_step_warning_id").hide()
            }
        })

        $("#num_ng_int_choice_checkbox_id").change(function() {
            if ($("#num_ng_int_choice_checkbox_id")[0].checked) {
                is_num_ng_choice_flag = true
                $("#num_ng_int_checkbox_id").prop("checked", false)

                $("#num_ng_space_id").show()
                $("#num_ng_group_id").hide()
                $("#num_ng_choice_group_id").show()

                $("#num_ng_tune1_id").hide()
                $("#num_ng_tune2_id").hide()
                $("#num_ng_tune3_id").hide()
                $("#num_ng_test_id").hide()

                $("#num_ng_choice_value_input_id").val("1, 3, 4")

                $("#num_ng_choice_value_warning_id").hide()
            }
        })

        // node_dropout
        $("#node_dropout_checkbox_id").change(function() {
            if ($("#node_dropout_checkbox_id")[0].checked) {
                $("#node_dropout_float_id").show()
                $("#node_dropout_float_choice_id").show()

                $("#node_dropout_float_checkbox_id").prop("checked", true)
                $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#node_dropout_space_id").show()
                $("#node_dropout_group_id").show()
                $("#node_dropout_choice_group_id").hide()

                $("#node_dropout_tune1_id").show()
                $("#node_dropout_tune2_id").show()
                $("#node_dropout_tune3_id").show()
                $("#node_dropout_test_id").hide()

                $("#node_dropout_min_input_id").val(0.1)
                $("#node_dropout_max_input_id").val(0.9)
                $("#node_dropout_step_input_id").val("")

                $("#node_dropout_min_warning_id").hide()
                $("#node_dropout_max_warning_id").hide()
                $("#node_dropout_step_warning_id").hide()
            } else {
                $("#node_dropout_float_id").hide()
                $("#node_dropout_float_choice_id").hide()

                $("#node_dropout_float_checkbox_id").prop("checked", false)
                $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#node_dropout_space_id").hide()
                $("#node_dropout_group_id").hide()
                $("#node_dropout_choice_group_id").hide()
            }
        })

        $("#node_dropout_float_checkbox_id").change(function() {
            if ($("#node_dropout_float_checkbox_id")[0].checked) {
                is_node_dropout_choice_flag = false
                $("#node_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#node_dropout_space_id").show()
                $("#node_dropout_group_id").show()
                $("#node_dropout_choice_group_id").hide()

                $("#node_dropout_tune1_id").show()
                $("#node_dropout_tune2_id").show()
                $("#node_dropout_tune3_id").show()
                $("#node_dropout_test_id").hide()

                $("#node_dropout_min_input_id").val(0.1)
                $("#node_dropout_max_input_id").val(0.9)
                $("#node_dropout_step_input_id").val("")

                $("#node_dropout_min_warning_id").hide()
                $("#node_dropout_max_warning_id").hide()
                $("#node_dropout_step_warning_id").hide()
            }
        })

        $("#node_dropout_float_choice_checkbox_id").change(function() {
            if ($("#node_dropout_float_choice_checkbox_id")[0].checked) {
                is_node_dropout_choice_flag = true
                $("#node_dropout_float_checkbox_id").prop("checked", false)

                $("#node_dropout_space_id").show()
                $("#node_dropout_group_id").hide()
                $("#node_dropout_choice_group_id").show()

                $("#node_dropout_tune1_id").hide()
                $("#node_dropout_tune2_id").hide()
                $("#node_dropout_tune3_id").hide()
                $("#node_dropout_test_id").hide()

                $("#node_dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                $("#node_dropout_choice_value_warning_id").hide()
            }
        })

        // mess_dropout
        $("#mess_dropout_checkbox_id").change(function() {
            if ($("#mess_dropout_checkbox_id")[0].checked) {
                $("#mess_dropout_float_id").show()
                $("#mess_dropout_float_choice_id").show()

                $("#mess_dropout_float_checkbox_id").prop("checked", true)
                $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#mess_dropout_space_id").show()
                $("#mess_dropout_group_id").show()
                $("#mess_dropout_choice_group_id").hide()

                $("#mess_dropout_tune1_id").show()
                $("#mess_dropout_tune2_id").show()
                $("#mess_dropout_tune3_id").show()
                $("#mess_dropout_test_id").hide()

                $("#mess_dropout_min_input_id").val(0.1)
                $("#mess_dropout_max_input_id").val(0.9)
                $("#mess_dropout_step_input_id").val("")

                $("#mess_dropout_min_warning_id").hide()
                $("#mess_dropout_max_warning_id").hide()
                $("#mess_dropout_step_warning_id").hide()
            } else {
                $("#mess_dropout_float_id").hide()
                $("#mess_dropout_float_choice_id").hide()

                $("#mess_dropout_float_checkbox_id").prop("checked", false)
                $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#mess_dropout_space_id").hide()
                $("#mess_dropout_group_id").hide()
                $("#mess_dropout_choice_group_id").hide()
            }
        })

        $("#mess_dropout_float_checkbox_id").change(function() {
            if ($("#mess_dropout_float_checkbox_id")[0].checked) {
                is_mess_dropout_choice_flag = false
                $("#mess_dropout_float_choice_checkbox_id").prop("checked", false)

                $("#mess_dropout_space_id").show()
                $("#mess_dropout_group_id").show()
                $("#mess_dropout_choice_group_id").hide()

                $("#mess_dropout_tune1_id").show()
                $("#mess_dropout_tune2_id").show()
                $("#mess_dropout_tune3_id").show()
                $("#mess_dropout_test_id").hide()

                $("#mess_dropout_min_input_id").val(0.1)
                $("#mess_dropout_max_input_id").val(0.9)
                $("#mess_dropout_step_input_id").val("")

                $("#mess_dropout_min_warning_id").hide()
                $("#mess_dropout_max_warning_id").hide()
                $("#mess_dropout_step_warning_id").hide()
            }
        })

        $("#mess_dropout_float_choice_checkbox_id").change(function() {
            if ($("#mess_dropout_float_choice_checkbox_id")[0].checked) {
                is_mess_dropout_choice_flag = true
                $("#mess_dropout_float_checkbox_id").prop("checked", false)

                $("#mess_dropout_space_id").show()
                $("#mess_dropout_group_id").hide()
                $("#mess_dropout_choice_group_id").show()

                $("#mess_dropout_tune1_id").hide()
                $("#mess_dropout_tune2_id").hide()
                $("#mess_dropout_tune3_id").hide()
                $("#mess_dropout_test_id").hide()

                $("#mess_dropout_choice_value_input_id").val("0.1, 0.5, 0.9")

                $("#mess_dropout_choice_value_warning_id").hide()
            }
        })

        // reg_1
        $("#reg1_checkbox_id").change(function() {
            if ($("#reg1_checkbox_id")[0].checked) {
                $("#reg1_float_id").show()
                $("#reg1_float_choice_id").show()

                $("#reg1_float_checkbox_id").prop("checked", true)
                $("#reg1_float_choice_checkbox_id").prop("checked", false)

                $("#reg1_space_id").show()
                $("#reg1_group_id").show()
                $("#reg1_choice_group_id").hide()

                $("#reg1_tune1_id").show()
                $("#reg1_tune2_id").show()
                $("#reg1_tune3_id").show()
                $("#reg1_test_id").hide()

                $("#reg1_min_input_id").val(0.01)
                $("#reg1_max_input_id").val(0.1)
                $("#reg1_step_input_id").val("")

                $("#reg1_min_warning_id").hide()
                $("#reg1_max_warning_id").hide()
                $("#reg1_step_warning_id").hide()
            } else {
                $("#reg1_float_id").hide()
                $("#reg1_float_choice_id").hide()

                $("#reg1_float_checkbox_id").prop("checked", false)
                $("#reg1_float_choice_checkbox_id").prop("checked", false)

                $("#reg1_space_id").hide()
                $("#reg1_group_id").hide()
                $("#reg1_choice_group_id").hide()
            }
        })

        $("#reg1_float_checkbox_id").change(function() {
            if ($("#reg1_float_checkbox_id")[0].checked) {
                is_reg1_choice_flag = false
                $("#reg1_float_choice_checkbox_id").prop("checked", false)

                $("#reg1_space_id").show()
                $("#reg1_group_id").show()
                $("#reg1_choice_group_id").hide()

                $("#reg1_tune1_id").show()
                $("#reg1_tune2_id").show()
                $("#reg1_tune3_id").show()
                $("#reg1_test_id").hide()

                $("#reg1_min_input_id").val(0.01)
                $("#reg1_max_input_id").val(0.1)
                $("#reg1_step_input_id").val("")

                $("#reg1_min_warning_id").hide()
                $("#reg1_max_warning_id").hide()
                $("#reg1_step_warning_id").hide()
            }
        })

        $("#reg1_float_choice_checkbox_id").change(function() {
            if ($("#reg1_float_choice_checkbox_id")[0].checked) {
                is_reg1_choice_flag = true
                $("#reg1_float_checkbox_id").prop("checked", false)

                $("#reg1_space_id").show()
                $("#reg1_group_id").hide()
                $("#reg1_choice_group_id").show()

                $("#reg1_tune1_id").hide()
                $("#reg1_tune2_id").hide()
                $("#reg1_tune3_id").hide()
                $("#reg1_test_id").hide()

                $("#reg1_choice_value_input_id").val("0.01, 0.05, 0.1")

                $("#reg1_choice_value_warning_id").hide()
            }
        })

        // reg_2
        $("#reg2_checkbox_id").change(function() {
            if ($("#reg2_checkbox_id")[0].checked) {
                $("#reg2_float_id").show()
                $("#reg2_float_choice_id").show()

                $("#reg2_float_checkbox_id").prop("checked", true)
                $("#reg2_float_choice_checkbox_id").prop("checked", false)

                $("#reg2_space_id").show()
                $("#reg2_group_id").show()
                $("#reg2_choice_group_id").hide()

                $("#reg2_tune1_id").show()
                $("#reg2_tune2_id").show()
                $("#reg2_tune3_id").show()
                $("#reg2_test_id").hide()

                $("#reg2_min_input_id").val(0.01)
                $("#reg2_max_input_id").val(0.1)
                $("#reg2_step_input_id").val("")

                $("#reg2_min_warning_id").hide()
                $("#reg2_max_warning_id").hide()
                $("#reg2_step_warning_id").hide()
            } else {
                $("#reg2_float_id").hide()
                $("#reg2_float_choice_id").hide()

                $("#reg2_float_checkbox_id").prop("checked", false)
                $("#reg2_float_choice_checkbox_id").prop("checked", false)

                $("#reg2_space_id").hide()
                $("#reg2_group_id").hide()
                $("#reg2_choice_group_id").hide()
            }
        })

        $("#reg2_float_checkbox_id").change(function() {
            if ($("#reg2_float_checkbox_id")[0].checked) {
                is_reg2_choice_flag = false
                $("#reg2_float_choice_checkbox_id").prop("checked", false)

                $("#reg2_space_id").show()
                $("#reg2_group_id").show()
                $("#reg2_choice_group_id").hide()

                $("#reg2_tune1_id").show()
                $("#reg2_tune2_id").show()
                $("#reg2_tune3_id").show()
                $("#reg2_test_id").hide()

                $("#reg2_min_input_id").val(0.01)
                $("#reg2_max_input_id").val(0.1)
                $("#reg2_step_input_id").val("")

                $("#reg2_min_warning_id").hide()
                $("#reg2_max_warning_id").hide()
                $("#reg2_step_warning_id").hide()
            }
        })

        $("#reg2_float_choice_checkbox_id").change(function() {
            if ($("#reg2_float_choice_checkbox_id")[0].checked) {
                is_reg2_choice_flag = true
                $("#reg2_float_checkbox_id").prop("checked", false)

                $("#reg2_space_id").show()
                $("#reg2_group_id").hide()
                $("#reg2_choice_group_id").show()

                $("#reg2_tune1_id").hide()
                $("#reg2_tune2_id").hide()
                $("#reg2_tune3_id").hide()
                $("#reg2_test_id").hide()

                $("#reg2_choice_value_input_id").val("0.01, 0.05, 0.1")

                $("#reg2_choice_value_warning_id").hide()
            }
        })

        // num_layers
        $("#num_layers_checkbox_id").change(function() {
            if ($("#num_layers_checkbox_id")[0].checked) {
                $("#num_layers_int_id").show()
                $("#num_layers_int_choice_id").show()

                $("#num_layers_int_checkbox_id").prop("checked", true)
                $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                $("#num_layers_space_id").show()
                $("#num_layers_group_id").show()
                $("#num_layers_choice_group_id").hide()

                $("#num_layers_tune1_id").show()
                $("#num_layers_tune2_id").show()
                $("#num_layers_tune3_id").show()
                $("#num_layers_test_id").hide()

                $("#num_layers_min_input_id").val(1)
                $("#num_layers_max_input_id").val(3)
                $("#num_layers_step_input_id").val("")

                $("#num_layers_min_warning_id").hide()
                $("#num_layers_max_warning_id").hide()
                $("#num_layers_step_warning_id").hide()
            } else {
                $("#num_layers_int_id").hide()
                $("#num_layers_int_choice_id").hide()

                $("#num_layers_int_checkbox_id").prop("checked", false)
                $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                $("#num_layers_space_id").hide()
                $("#num_layers_group_id").hide()
                $("#num_layers_choice_group_id").hide()
            }
        })

        $("#num_layers_int_checkbox_id").change(function() {
            if ($("#num_layers_int_checkbox_id")[0].checked) {
                is_num_layers_choice_flag = false
                $("#num_layers_int_choice_checkbox_id").prop("checked", false)

                $("#num_layers_space_id").show()
                $("#num_layers_group_id").show()
                $("#num_layers_choice_group_id").hide()

                $("#num_layers_tune1_id").show()
                $("#num_layers_tune2_id").show()
                $("#num_layers_tune3_id").show()
                $("#num_layers_test_id").hide()

                $("#num_layers_min_input_id").val(1)
                $("#num_layers_max_input_id").val(3)
                $("#num_layers_step_input_id").val("")

                $("#num_layers_min_warning_id").hide()
                $("#num_layers_max_warning_id").hide()
                $("#num_layers_step_warning_id").hide()
            }
        })

        $("#num_layers_int_choice_checkbox_id").change(function() {
            if ($("#num_layers_int_choice_checkbox_id")[0].checked) {
                is_num_layers_choice_flag = true
                $("#num_layers_int_checkbox_id").prop("checked", false)

                $("#num_layers_space_id").show()
                $("#num_layers_group_id").hide()
                $("#num_layers_choice_group_id").show()

                $("#num_layers_tune1_id").hide()
                $("#num_layers_tune2_id").hide()
                $("#num_layers_tune3_id").hide()
                $("#num_layers_test_id").hide()

                $("#num_layers_choice_value_input_id").val("1, 2, 3")

                $("#num_layers_choice_value_warning_id").hide()
            }
        })

        // maxk
        $("#maxk_checkbox_id").change(function() {
            if ($("#maxk_checkbox_id")[0].checked) {
                $("#maxk_int_id").show()
                $("#maxk_int_choice_id").show()

                $("#maxk_int_checkbox_id").prop("checked", true)
                $("#maxk_int_choice_checkbox_id").prop("checked", false)

                $("#maxk_space_id").show()
                $("#maxk_group_id").show()
                $("#maxk_choice_group_id").hide()

                $("#maxk_tune1_id").show()
                $("#maxk_tune2_id").show()
                $("#maxk_tune3_id").show()
                $("#maxk_test_id").hide()

                $("#maxk_min_input_id").val(30)
                $("#maxk_max_input_id").val(60)
                $("#maxk_step_input_id").val("")

                $("#maxk_min_warning_id").hide()
                $("#maxk_max_warning_id").hide()
                $("#maxk_step_warning_id").hide()
            } else {
                $("#maxk_int_id").hide()
                $("#maxk_int_choice_id").hide()

                $("#maxk_int_checkbox_id").prop("checked", false)
                $("#maxk_int_choice_checkbox_id").prop("checked", false)

                $("#maxk_space_id").hide()
                $("#maxk_group_id").hide()
                $("#maxk_choice_group_id").hide()
            }
        })

        $("#maxk_int_checkbox_id").change(function() {
            if ($("#maxk_int_checkbox_id")[0].checked) {
                is_maxk_choice_flag = false
                $("#maxk_int_choice_checkbox_id").prop("checked", false)

                $("#maxk_space_id").show()
                $("#maxk_group_id").show()
                $("#maxk_choice_group_id").hide()

                $("#maxk_tune1_id").show()
                $("#maxk_tune2_id").show()
                $("#maxk_tune3_id").show()
                $("#maxk_test_id").hide()

                $("#maxk_min_input_id").val(30)
                $("#maxk_max_input_id").val(60)
                $("#maxk_step_input_id").val("")

                $("#maxk_min_warning_id").hide()
                $("#maxk_max_warning_id").hide()
                $("#maxk_step_warning_id").hide()
            }
        })

        $("#maxk_int_choice_checkbox_id").change(function() {
            if ($("#maxk_int_choice_checkbox_id")[0].checked) {
                is_maxk_choice_flag = true
                $("#maxk_int_checkbox_id").prop("checked", false)

                $("#maxk_space_id").show()
                $("#maxk_group_id").hide()
                $("#maxk_choice_group_id").show()

                $("#maxk_tune1_id").hide()
                $("#maxk_tune2_id").hide()
                $("#maxk_tune3_id").hide()
                $("#maxk_test_id").hide()

                $("#maxk_choice_value_input_id").val("30, 45, 60")

                $("#maxk_choice_value_warning_id").hide()
            }
        })

        // alpha
        $("#alpha_checkbox_id").change(function() {
            if ($("#alpha_checkbox_id")[0].checked) {
                $("#alpha_float_id").show()
                $("#alpha_float_choice_id").show()

                $("#alpha_float_checkbox_id").prop("checked", true)
                $("#alpha_float_choice_checkbox_id").prop("checked", false)

                $("#alpha_space_id").show()
                $("#alpha_group_id").show()
                $("#alpha_choice_group_id").hide()

                $("#alpha_tune1_id").show()
                $("#alpha_tune2_id").show()
                $("#alpha_tune3_id").show()
                $("#alpha_test_id").hide()

                $("#alpha_min_input_id").val(1)
                $("#alpha_max_input_id").val(10)
                $("#alpha_step_input_id").val("")

                $("#alpha_min_warning_id").hide()
                $("#alpha_max_warning_id").hide()
                $("#alpha_step_warning_id").hide()
            } else {
                $("#alpha_float_id").hide()
                $("#alpha_float_choice_id").hide()

                $("#alpha_float_checkbox_id").prop("checked", false)
                $("#alpha_float_choice_checkbox_id").prop("checked", false)

                $("#alpha_space_id").hide()
                $("#alpha_group_id").hide()
                $("#alpha_choice_group_id").hide()
            }
        })

        $("#alpha_float_checkbox_id").change(function() {
            if ($("#alpha_float_checkbox_id")[0].checked) {
                is_alpha_choice_flag = false
                $("#alpha_float_choice_checkbox_id").prop("checked", false)

                $("#alpha_space_id").show()
                $("#alpha_group_id").show()
                $("#alpha_choice_group_id").hide()

                $("#alpha_tune1_id").show()
                $("#alpha_tune2_id").show()
                $("#alpha_tune3_id").show()
                $("#alpha_test_id").hide()

                $("#alpha_min_input_id").val(1)
                $("#alpha_max_input_id").val(10)
                $("#alpha_step_input_id").val("")

                $("#alpha_min_warning_id").hide()
                $("#alpha_max_warning_id").hide()
                $("#alpha_step_warning_id").hide()
            }
        })

        $("#alpha_float_choice_checkbox_id").change(function() {
            if ($("#alpha_float_choice_checkbox_id")[0].checked) {
                is_alpha_choice_flag = true
                $("#alpha_float_checkbox_id").prop("checked", false)

                $("#alpha_space_id").show()
                $("#alpha_group_id").hide()
                $("#alpha_choice_group_id").show()

                $("#alpha_tune1_id").hide()
                $("#alpha_tune2_id").hide()
                $("#alpha_tune3_id").hide()
                $("#alpha_test_id").hide()

                $("#alpha_choice_value_input_id").val("1, 5, 10")

                $("#alpha_choice_value_warning_id").hide()
            }
        })

        // elastic
        $("#elastic_checkbox_id").change(function() {
            if ($("#elastic_checkbox_id")[0].checked) {
                $("#elastic_float_id").show()
                $("#elastic_float_choice_id").show()

                $("#elastic_float_checkbox_id").prop("checked", true)
                $("#elastic_float_choice_checkbox_id").prop("checked", false)

                $("#elastic_space_id").show()
                $("#elastic_group_id").show()
                $("#elastic_choice_group_id").hide()

                $("#elastic_tune1_id").show()
                $("#elastic_tune2_id").show()
                $("#elastic_tune3_id").show()
                $("#elastic_test_id").hide()

                $("#elastic_min_input_id").val(0.1)
                $("#elastic_max_input_id").val(0.9)
                $("#elastic_step_input_id").val("")

                $("#elastic_min_warning_id").hide()
                $("#elastic_max_warning_id").hide()
                $("#elastic_step_warning_id").hide()
            } else {
                $("#elastic_float_id").hide()
                $("#elastic_float_choice_id").hide()

                $("#elastic_float_checkbox_id").prop("checked", false)
                $("#elastic_float_choice_checkbox_id").prop("checked", false)

                $("#elastic_space_id").hide()
                $("#elastic_group_id").hide()
                $("#elastic_choice_group_id").hide()
            }
        })

        $("#elastic_float_checkbox_id").change(function() {
            if ($("#elastic_float_checkbox_id")[0].checked) {
                is_elastic_choice_flag = false
                $("#elastic_float_choice_checkbox_id").prop("checked", false)

                $("#elastic_space_id").show()
                $("#elastic_group_id").show()
                $("#elastic_choice_group_id").hide()

                $("#elastic_tune1_id").show()
                $("#elastic_tune2_id").show()
                $("#elastic_tune3_id").show()
                $("#elastic_test_id").hide()

                $("#elastic_min_input_id").val(0.1)
                $("#elastic_max_input_id").val(0.9)
                $("#elastic_step_input_id").val("")

                $("#elastic_min_warning_id").hide()
                $("#elastic_max_warning_id").hide()
                $("#elastic_step_warning_id").hide()
            }
        })

        $("#elastic_float_choice_checkbox_id").change(function() {
            if ($("#elastic_float_choice_checkbox_id")[0].checked) {
                is_elastic_choice_flag = true
                $("#elastic_float_checkbox_id").prop("checked", false)

                $("#elastic_space_id").show()
                $("#elastic_group_id").hide()
                $("#elastic_choice_group_id").show()

                $("#elastic_tune1_id").hide()
                $("#elastic_tune2_id").hide()
                $("#elastic_tune3_id").hide()
                $("#elastic_test_id").hide()

                $("#elastic_choice_value_input_id").val("0.1, 0.5, 0.9")

                $("#elastic_choice_value_warning_id").hide()
            }
        })

        // context_window
        $("#context_window_checkbox_id").change(function() {
            if ($("#context_window_checkbox_id")[0].checked) {
                $("#context_window_int_id").show()
                $("#context_window_int_choice_id").show()

                $("#context_window_int_checkbox_id").prop("checked", true)
                $("#context_window_int_choice_checkbox_id").prop("checked", false)

                $("#context_window_space_id").show()
                $("#context_window_group_id").show()
                $("#context_window_choice_group_id").hide()

                $("#context_window_tune1_id").show()
                $("#context_window_tune2_id").show()
                $("#context_window_tune3_id").show()
                $("#context_window_test_id").hide()

                $("#context_window_min_input_id").val(1)
                $("#context_window_max_input_id").val(2)
                $("#context_window_step_input_id").val("")

                $("#context_window_size_min_warning_id").hide()
                $("#context_window_max_warning_id").hide()
                $("#context_window_step_warning_id").hide()
            } else {
                $("#context_window_int_id").hide()
                $("#context_window_int_choice_id").hide()

                $("#context_window_int_checkbox_id").prop("checked", false)
                $("#context_window_int_choice_checkbox_id").prop("checked", false)

                $("#context_window_space_id").hide()
                $("#context_window_group_id").hide()
                $("#context_window_choice_group_id").hide()
            }
        })

        $("#context_window_int_checkbox_id").change(function() {
            if ($("#context_window_int_checkbox_id")[0].checked) {
                is_context_window_choice_flag = false
                $("#context_window_int_choice_checkbox_id").prop("checked", false)

                $("#context_window_space_id").show()
                $("#context_window_group_id").show()
                $("#context_window_choice_group_id").hide()

                $("#context_window_tune1_id").show()
                $("#context_window_tune2_id").show()
                $("#context_window_tune3_id").show()
                $("#context_window_test_id").hide()

                $("#context_window_min_input_id").val(1)
                $("#context_window_max_input_id").val(2)
                $("#context_window_step_input_id").val("")

                $("#context_window_size_min_warning_id").hide()
                $("#context_window_max_warning_id").hide()
                $("#context_window_step_warning_id").hide()
            }
        })

        $("#context_window_int_choice_checkbox_id").change(function() {
            if ($("#context_window_int_choice_checkbox_id")[0].checked) {
                is_context_window_choice_flag = true
                $("#context_window_int_checkbox_id").prop("checked", false)

                $("#context_window_space_id").show()
                $("#context_window_group_id").hide()
                $("#context_window_choice_group_id").show()

                $("#context_window_tune1_id").hide()
                $("#context_window_tune2_id").hide()
                $("#context_window_tune3_id").hide()
                $("#context_window_test_id").hide()

                $("#context_window_choice_value_input_id").val("1, 2, 3")

                $("#context_window_choice_value_warning_id").hide()
            }
        })

        // rho
        $("#rho_checkbox_id").change(function() {
            if ($("#rho_checkbox_id")[0].checked) {
                $("#rho_float_id").show()
                $("#rho_float_choice_id").show()

                $("#rho_float_checkbox_id").prop("checked", true)
                $("#rho_float_choice_checkbox_id").prop("checked", false)

                $("#rho_space_id").show()
                $("#rho_group_id").show()
                $("#rho_choice_group_id").hide()

                $("#rho_tune1_id").show()
                $("#rho_tune2_id").show()
                $("#rho_tune3_id").show()
                $("#rho_test_id").hide()

                $("#rho_min_input_id").val(0.01)
                $("#rho_max_input_id").val(0.5)
                $("#rho_step_input_id").val("")

                $("#rho_min_warning_id").hide()
                $("#rho_max_warning_id").hide()
                $("#rho_step_warning_id").hide()
            } else {
                $("#rho_float_id").hide()
                $("#rho_float_choice_id").hide()

                $("#rho_float_checkbox_id").prop("checked", false)
                $("#rho_float_choice_checkbox_id").prop("checked", false)

                $("#rho_space_id").hide()
                $("#rho_group_id").hide()
                $("#rho_choice_group_id").hide()
            }
        })

        $("#rho_float_checkbox_id").change(function() {
            if ($("#rho_float_checkbox_id")[0].checked) {
                is_rho_choice_flag = false
                $("#rho_float_choice_checkbox_id").prop("checked", false)

                $("#rho_space_id").show()
                $("#rho_group_id").show()
                $("#rho_choice_group_id").hide()

                $("#rho_tune1_id").show()
                $("#rho_tune2_id").show()
                $("#rho_tune3_id").show()
                $("#rho_test_id").hide()

                $("#rho_min_input_id").val(0.01)
                $("#rho_max_input_id").val(0.5)
                $("#rho_step_input_id").val("")

                $("#rho_min_warning_id").hide()
                $("#rho_max_warning_id").hide()
                $("#rho_step_warning_id").hide()
            }
        })

        $("#rho_float_choice_checkbox_id").change(function() {
            if ($("#rho_float_choice_checkbox_id")[0].checked) {
                is_rho_choice_flag = true
                $("#rho_float_checkbox_id").prop("checked", false)

                $("#rho_space_id").show()
                $("#rho_group_id").hide()
                $("#rho_choice_group_id").show()

                $("#rho_tune1_id").hide()
                $("#rho_tune2_id").hide()
                $("#rho_tune3_id").hide()
                $("#rho_test_id").hide()

                $("#rho_choice_value_input_id").val("0.01, 0.3, 0.5")

                $("#rho_choice_value_warning_id").hide()
            }
        })

        // reg
        $("#reg_checkbox_id").change(function() {
            if ($("#reg_checkbox_id")[0].checked) {
                $("#reg_float_id").show()
                $("#reg_float_choice_id").show()

                $("#reg_float_checkbox_id").prop("checked", true)
                $("#reg_float_choice_checkbox_id").prop("checked", false)

                $("#reg_space_id").show()
                $("#reg_group_id").show()
                $("#reg_choice_group_id").hide()

                $("#reg_tune1_id").show()
                $("#reg_tune2_id").show()
                $("#reg_tune3_id").show()
                $("#reg_test_id").hide()

                $("#reg_min_input_id").val(10)
                $("#reg_max_input_id").val(1000)
                $("#reg_step_input_id").val("")

                $("#reg_min_warning_id").hide()
                $("#reg_max_warning_id").hide()
                $("#reg_step_warning_id").hide()
            } else {
                $("#reg_float_id").hide()
                $("#reg_float_choice_id").hide()

                $("#reg_float_checkbox_id").prop("checked", false)
                $("#reg_float_choice_checkbox_id").prop("checked", false)

                $("#reg_space_id").hide()
                $("#reg_group_id").hide()
                $("#reg_choice_group_id").hide()
            }
        })

        $("#reg_float_checkbox_id").change(function() {
            if ($("#reg_float_checkbox_id")[0].checked) {
                is_reg_choice_flag = false
                $("#reg_float_choice_checkbox_id").prop("checked", false)

                $("#reg_space_id").show()
                $("#reg_group_id").show()
                $("#reg_choice_group_id").hide()

                $("#reg_tune1_id").show()
                $("#reg_tune2_id").show()
                $("#reg_tune3_id").show()
                $("#reg_test_id").hide()

                $("#reg_min_input_id").val(10)
                $("#reg_max_input_id").val(1000)
                $("#reg_step_input_id").val("")

                $("#reg_min_warning_id").hide()
                $("#reg_max_warning_id").hide()
                $("#reg_step_warning_id").hide()
            }
        })

        $("#reg_float_choice_checkbox_id").change(function() {
            if ($("#reg_float_choice_checkbox_id")[0].checked) {
                is_reg_choice_flag = true
                $("#reg_float_checkbox_id").prop("checked", false)

                $("#reg_space_id").show()
                $("#reg_group_id").hide()
                $("#reg_choice_group_id").show()

                $("#reg_tune1_id").hide()
                $("#reg_tune2_id").hide()
                $("#reg_tune3_id").hide()
                $("#reg_test_id").hide()

                $("#reg_choice_value_input_id").val("10, 500, 1000")

                $("#reg_choice_value_warning_id").hide()
            }
        })
    } else {
        $("#batch_size_checkbox_id").change(function() {
            if ($("#batch_size_checkbox_id")[0].checked) {
                $("#batch_size_int_id").hide()
                $("#batch_size_int_choice_id").hide()

                $("#batch_size_space_id").show()
                $("#batch_size_group_id").show()
                $("#batch_size_choice_group_id").hide()

                $("#batch_size_tune1_id").hide()
                $("#batch_size_tune2_id").hide()
                $("#batch_size_tune3_id").hide()
                $("#batch_size_test_id").show()

                $("#batch_size_value_input_id").val(128)

                $("#batch_size_value_warning_id").hide()
            } else {
                $("#batch_size_int_id").hide()
                $("#batch_size_int_choice_id").hide()

                $("#batch_size_space_id").hide()
                $("#batch_size_group_id").hide()
                $("#batch_size_choice_group_id").hide()
            }
        })

        $("#latent_dim_checkbox_id").change(function() {
            if ($("#latent_dim_checkbox_id")[0].checked) {
                $("#latent_dim_int_id").hide()
                $("#latent_dim_int_choice_id").hide()

                $("#latent_dim_space_id").show()
                $("#latent_dim_group_id").show()
                $("#latent_dim_choice_group_id").hide()

                $("#latent_dim_tune1_id").hide()
                $("#latent_dim_tune2_id").hide()
                $("#latent_dim_tune3_id").hide()
                $("#latent_dim_test_id").show()

                $("#latent_dim_value_input_id").val(128)

                $("#latent_dim_value_warning_id").hide()
            } else {
                $("#latent_dim_int_id").hide()
                $("#latent_dim_int_choice_id").hide()

                $("#latent_dim_space_id").hide()
                $("#latent_dim_group_id").hide()
                $("#latent_dim_choice_group_id").hide()
            }
        })

        $("#dropout_checkbox_id").change(function() {
            if ($("#dropout_checkbox_id")[0].checked) {
                $("#dropout_float_id").hide()
                $("#dropout_float_choice_id").hide()

                $("#dropout_space_id").show()
                $("#dropout_group_id").show()
                $("#dropout_choice_group_id").hide()

                $("#dropout_tune1_id").hide()
                $("#dropout_tune2_id").hide()
                $("#dropout_tune3_id").hide()
                $("#dropout_test_id").show()

                $("#dropout_value_input_id").val(0.5)

                $("#dropout_value_warning_id").hide()
            } else {
                $("#dropout_float_id").hide()
                $("#dropout_float_choice_id").hide()

                $("#dropout_space_id").hide()
                $("#dropout_group_id").hide()
                $("#dropout_choice_group_id").hide()
            }
        })

        $("#lr_checkbox_id").change(function() {
            if ($("#lr_checkbox_id")[0].checked) {
                $("#lr_float_id").hide()
                $("#lr_float_choice_id").hide()

                $("#lr_space_id").show()
                $("#lr_group_id").show()
                $("#lr_choice_group_id").hide()

                $("#lr_tune1_id").hide()
                $("#lr_tune2_id").hide()
                $("#lr_tune3_id").hide()
                $("#lr_test_id").show()

                $("#lr_value_input_id").val(0.01)

                $("#lr_value_warning_id").hide()
            } else {
                $("#lr_float_id").hide()
                $("#lr_float_choice_id").hide()

                $("#lr_space_id").hide()
                $("#lr_group_id").hide()
                $("#lr_choice_group_id").hide()
            }
        })

        $("#anneal_cap_checkbox_id").change(function() {
            if ($("#anneal_cap_checkbox_id")[0].checked) {
                $("#anneal_cap_float_id").hide()
                $("#anneal_cap_float_choice_id").hide()

                $("#anneal_cap_space_id").show()
                $("#anneal_cap_group_id").show()
                $("#anneal_cap_choice_group_id").hide()

                $("#anneal_cap_tune1_id").hide()
                $("#anneal_cap_tune2_id").hide()
                $("#anneal_cap_tune3_id").hide()
                $("#anneal_cap_test_id").show()

                $("#anneal_cap_value_input_id").val(0.2)

                $("#anneal_cap_value_warning_id").hide()
            } else {
                $("#anneal_cap_float_id").hide()
                $("#anneal_cap_float_choice_id").hide()

                $("#anneal_cap_space_id").hide()
                $("#anneal_cap_group_id").hide()
                $("#anneal_cap_choice_group_id").hide()
            }
        })

        $("#factors_checkbox_id").change(function() {
            if ($("#factors_checkbox_id")[0].checked) {
                $("#factors_int_id").hide()
                $("#factors_int_choice_id").hide()

                $("#factors_space_id").show()
                $("#factors_group_id").show()
                $("#factors_choice_group_id").hide()

                $("#factors_tune1_id").hide()
                $("#factors_tune2_id").hide()
                $("#factors_tune3_id").hide()
                $("#factors_test_id").show()

                $("#factors_value_input_id").val(50)

                $("#factors_value_warning_id").hide()
            } else {
                $("#factors_int_id").hide()
                $("#factors_int_choice_id").hide()

                $("#factors_space_id").hide()
                $("#factors_group_id").hide()
                $("#factors_choice_group_id").hide()
            }
        })

        $("#num_ng_checkbox_id").change(function() {
            if ($("#num_ng_checkbox_id")[0].checked) {
                $("#num_ng_int_id").hide()
                $("#num_ng_int_choice_id").hide()

                $("#num_ng_space_id").show()
                $("#num_ng_group_id").show()
                $("#num_ng_choice_group_id").hide()

                $("#num_ng_tune1_id").hide()
                $("#num_ng_tune2_id").hide()
                $("#num_ng_tune3_id").hide()
                $("#num_ng_test_id").show()

                $("#num_ng_value_input_id").val(2)

                $("#num_ng_value_warning_id").hide()
            } else {
                $("#num_ng_int_id").hide()
                $("#num_ng_int_choice_id").hide()

                $("#num_ng_space_id").hide()
                $("#num_ng_group_id").hide()
                $("#num_ng_choice_group_id").hide()
            }
        })

        $("#node_dropout_checkbox_id").change(function() {
            if ($("#node_dropout_checkbox_id")[0].checked) {
                $("#node_dropout_float_id").hide()
                $("#node_dropout_float_choice_id").hide()

                $("#node_dropout_space_id").show()
                $("#node_dropout_group_id").show()
                $("#node_dropout_choice_group_id").hide()

                $("#node_dropout_tune1_id").hide()
                $("#node_dropout_tune2_id").hide()
                $("#node_dropout_tune3_id").hide()
                $("#node_dropout_test_id").show()

                $("#node_dropout_value_input_id").val(0.5)

                $("#node_dropout_value_warning_id").hide()
            } else {
                $("#node_dropout_float_id").hide()
                $("#node_dropout_float_choice_id").hide()

                $("#node_dropout_space_id").hide()
                $("#node_dropout_group_id").hide()
                $("#node_dropout_choice_group_id").hide()
            }
        })

        $("#mess_dropout_checkbox_id").change(function() {
            if ($("#mess_dropout_checkbox_id")[0].checked) {
                $("#mess_dropout_float_id").hide()
                $("#mess_dropout_float_choice_id").hide()

                $("#mess_dropout_space_id").show()
                $("#mess_dropout_group_id").show()
                $("#mess_dropout_choice_group_id").hide()

                $("#mess_dropout_tune1_id").hide()
                $("#mess_dropout_tune2_id").hide()
                $("#mess_dropout_tune3_id").hide()
                $("#mess_dropout_test_id").show()

                $("#mess_dropout_value_input_id").val(0.5)

                $("#mess_dropout_value_warning_id").hide()
            } else {
                $("#mess_dropout_float_id").hide()
                $("#mess_dropout_float_choice_id").hide()

                $("#mess_dropout_space_id").hide()
                $("#mess_dropout_group_id").hide()
                $("#mess_dropout_choice_group_id").hide()
            }
        })

        $("#reg1_checkbox_id").change(function() {
            if ($("#reg1_checkbox_id")[0].checked) {
                $("#reg1_float_id").hide()
                $("#reg1_float_choice_id").hide()

                $("#reg1_space_id").show()
                $("#reg1_group_id").show()
                $("#reg1_choice_group_id").hide()

                $("#reg1_tune1_id").hide()
                $("#reg1_tune2_id").hide()
                $("#reg1_tune3_id").hide()
                $("#reg1_test_id").show()

                $("#reg1_value_input_id").val(0)

                $("#reg1_value_warning_id").hide()
            } else {
                $("#reg1_float_id").hide()
                $("#reg1_float_choice_id").hide()

                $("#reg1_space_id").hide()
                $("#reg1_group_id").hide()
                $("#reg1_choice_group_id").hide()
            }
        })

        $("#reg2_checkbox_id").change(function() {
            if ($("#reg2_checkbox_id")[0].checked) {
                $("#reg2_float_id").hide()
                $("#reg2_float_choice_id").hide()

                $("#reg2_space_id").show()
                $("#reg2_group_id").show()
                $("#reg2_choice_group_id").hide()

                $("#reg2_tune1_id").hide()
                $("#reg2_tune2_id").hide()
                $("#reg2_tune3_id").hide()
                $("#reg2_test_id").show()

                $("#reg2_value_input_id").val(0)

                $("#reg2_value_warning_id").hide()
            } else {
                $("#reg2_float_id").hide()
                $("#reg2_float_choice_id").hide()

                $("#reg2_space_id").hide()
                $("#reg2_group_id").hide()
                $("#reg2_choice_group_id").hide()
            }
        })

        $("#num_layers_checkbox_id").change(function() {
            if ($("#num_layers_checkbox_id")[0].checked) {
                $("#num_layers_int_id").hide()
                $("#num_layers_int_choice_id").hide()

                $("#num_layers_space_id").show()
                $("#num_layers_group_id").show()
                $("#num_layers_choice_group_id").hide()

                $("#num_layers_tune1_id").hide()
                $("#num_layers_tune2_id").hide()
                $("#num_layers_tune3_id").hide()
                $("#num_layers_test_id").show()

                $("#num_layers_value_input_id").val(2)

                $("#num_layers_value_warning_id").hide()
            } else {
                $("#num_layers_int_id").hide()
                $("#num_layers_int_choice_id").hide()

                $("#num_layers_space_id").hide()
                $("#num_layers_group_id").hide()
                $("#num_layers_choice_group_id").hide()
            }
        })

        $("#maxk_checkbox_id").change(function() {
            if ($("#maxk_checkbox_id")[0].checked) {
                $("#maxk_int_id").hide()
                $("#maxk_int_choice_id").hide()

                $("#maxk_space_id").show()
                $("#maxk_group_id").show()
                $("#maxk_choice_group_id").hide()

                $("#maxk_tune1_id").hide()
                $("#maxk_tune2_id").hide()
                $("#maxk_tune3_id").hide()
                $("#maxk_test_id").show()

                $("#maxk_value_input_id").val(40)

                $("#maxk_value_warning_id").hide()
            } else {
                $("#maxk_int_id").hide()
                $("#maxk_int_choice_id").hide()

                $("#maxk_space_id").hide()
                $("#maxk_group_id").hide()
                $("#maxk_choice_group_id").hide()
            }
        })

        $("#alpha_checkbox_id").change(function() {
            if ($("#alpha_checkbox_id")[0].checked) {
                $("#alpha_float_id").hide()
                $("#alpha_float_choice_id").hide()

                $("#alpha_space_id").show()
                $("#alpha_group_id").show()
                $("#alpha_choice_group_id").hide()

                $("#alpha_tune1_id").hide()
                $("#alpha_tune2_id").hide()
                $("#alpha_tune3_id").hide()
                $("#alpha_test_id").show()

                $("#alpha_value_input_id").val(40)

                $("#alpha_value_warning_id").hide()
            } else {
                $("#alpha_float_id").hide()
                $("#alpha_float_choice_id").hide()

                $("#alpha_space_id").hide()
                $("#alpha_group_id").hide()
                $("#alpha_choice_group_id").hide()
            }
        })

        $("#elastic_checkbox_id").change(function() {
            if ($("#elastic_checkbox_id")[0].checked) {
                $("#elastic_float_id").hide()
                $("#elastic_float_choice_id").hide()

                $("#elastic_space_id").show()
                $("#elastic_group_id").show()
                $("#elastic_choice_group_id").hide()

                $("#elastic_tune1_id").hide()
                $("#elastic_tune2_id").hide()
                $("#elastic_tune3_id").hide()
                $("#elastic_test_id").show()

                $("#elastic_value_input_id").val(0.5)

                $("#elastic_value_warning_id").hide()
            } else {
                $("#elastic_float_id").hide()
                $("#elastic_float_choice_id").hide()

                $("#elastic_space_id").hide()
                $("#elastic_group_id").hide()
                $("#elastic_choice_group_id").hide()
            }
        })

        $("#context_window_checkbox_id").change(function() {
            if ($("#context_window_checkbox_id")[0].checked) {
                $("#context_window_int_id").hide()
                $("#context_window_int_choice_id").hide()

                $("#context_window_space_id").show()
                $("#context_window_group_id").show()
                $("#context_window_choice_group_id").hide()

                $("#context_window_tune1_id").hide()
                $("#context_window_tune2_id").hide()
                $("#context_window_tune3_id").hide()
                $("#context_window_test_id").show()

                $("#context_window_value_input_id").val(2)

                $("#context_window_value_min_warning_id").hide()
            } else {
                $("#context_window_int_id").hide()
                $("#context_window_int_choice_id").hide()

                $("#context_window_space_id").hide()
                $("#context_window_group_id").hide()
                $("#context_window_choice_group_id").hide()
            }
        })

        $("#rho_checkbox_id").change(function() {
            if ($("#rho_checkbox_id")[0].checked) {
                $("#rho_float_id").hide()
                $("#rho_float_choice_id").hide()

                $("#rho_space_id").show()
                $("#rho_group_id").show()
                $("#rho_choice_group_id").hide()

                $("#rho_tune1_id").hide()
                $("#rho_tune2_id").hide()
                $("#rho_tune3_id").hide()
                $("#rho_test_id").show()

                $("#rho_value_input_id").val(0.5)

                $("#rho_value_warning_id").hide()
            } else {
                $("#rho_float_id").hide()
                $("#rho_float_choice_id").hide()

                $("#rho_space_id").hide()
                $("#rho_group_id").hide()
                $("#rho_choice_group_id").hide()
            }
        })

        $("#reg_checkbox_id").change(function() {
            if ($("#reg_checkbox_id")[0].checked) {
                $("#reg_float_id").hide()
                $("#reg_float_choice_id").hide()

                $("#reg_space_id").show()
                $("#reg_group_id").show()
                $("#reg_choice_group_id").hide()

                $("#reg_tune1_id").hide()
                $("#reg_tune2_id").hide()
                $("#reg_tune3_id").hide()
                $("#reg_test_id").show()

                $("#reg_value_input_id").val(200)

                $("#reg_value_warning_id").hide()
            } else {
                $("#reg_float_id").hide()
                $("#reg_float_choice_id").hide()

                $("#reg_space_id").hide()
                $("#reg_group_id").hide()
                $("#reg_choice_group_id").hide()
            }
        })
    }

    // Changes in Algorithm Specific Settings Part will happen when "Algo_name" is set
    $("#algo_name_selector_id").change(function(){
        // If choose "EASE"
        if ($("#algo_name_selector_id").val() == "ease"){
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").hide()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").hide()
            $("#anneal_cap_id").hide()
            $("#factors_id").hide()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").show()
        // If choose "FM" or "MF"
        } else if ($("#algo_name_selector_id").val() == "fm" || 
                $("#algo_name_selector_id").val() == "mf") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").show()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").show()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").show()
            $("#reg2_id").show()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "NFM" or "NeuMF"
        } else if ($("#algo_name_selector_id").val() == "nfm" || 
                $("#algo_name_selector_id").val() == "neumf") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").hide()
            $("#dropout_id").show()
            $("#lr_id").show()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").show()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").show()
            $("#reg2_id").show()
            $("#num_layers_id").show()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "NGCF"
        } else if ($("#algo_name_selector_id").val() == "ngcf") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").show()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").show()
            $("#node_dropout_id").show()
            $("#mess_dropout_id").show()
            $("#reg1_id").show()
            $("#reg2_id").show()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "LightGCN"
        } else if ($("#algo_name_selector_id").val() == "lightgcn") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").show()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").show()
            $("#node_dropout_id").show()
            $("#mess_dropout_id").show()
            $("#reg1_id").show()
            $("#reg2_id").show()
            $("#num_layers_id").show()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "Multi-VAE"
        } else if ($("#algo_name_selector_id").val() == "multi-vae") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").show()
            $("#dropout_id").show()
            $("#lr_id").show()
            $("#anneal_cap_id").show()
            $("#factors_id").hide()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "Item2Vec"
        } else if ($("#algo_name_selector_id").val() == "item2vec") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").show()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").show()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").show()
            $("#rho_id").show()
            $("#reg_id").hide()
        // If choose "SLIM"
        } else if ($("#algo_name_selector_id").val() == "slim") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").hide()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").hide()
            $("#anneal_cap_id").hide()
            $("#factors_id").hide()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").show()
            $("#elastic_id").show()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "PureSVD"
        } else if ($("#algo_name_selector_id").val() == "puresvd") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").hide()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").hide()
            $("#anneal_cap_id").hide()
            $("#factors_id").show()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "ItemKNN"
        } else if ($("#algo_name_selector_id").val() == "itemknn") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").hide()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").hide()
            $("#anneal_cap_id").hide()
            $("#factors_id").hide()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").show()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        // If choose "MostPop"
        } else if ($("#algo_name_selector_id").val() == "mostpop") {
            // Changes in Algorithm Specific Setting
            $("#batch_size_id").hide()
            $("#latent_dim_id").hide()
            $("#dropout_id").hide()
            $("#lr_id").hide()
            $("#anneal_cap_id").hide()
            $("#factors_id").hide()
            $("#num_ng_id").hide()
            $("#node_dropout_id").hide()
            $("#mess_dropout_id").hide()
            $("#reg1_id").hide()
            $("#reg2_id").hide()
            $("#num_layers_id").hide()
            $("#maxk_id").hide()
            $("#alpha_id").hide()
            $("#elastic_id").hide()
            $("#context_window_id").hide()
            $("#rho_id").hide()
            $("#reg_id").hide()
        }
    })

    // Check whether the input item is numeric or a number or an integer in Algo-specific-setting Part
    // Check batch_size 
    $("#batch_size_min_input_id").change(function(){
        var val_min_batch_size = $("#batch_size_min_input_id").val()
        test_val_min_batch_size = Number(val_min_batch_size)
        if (!Number.isInteger(test_val_min_batch_size)) {
            $("#batch_size_min_input_id").val(val_min_batch_size)
            $("#batch_size_min_warning_id").show()
            is_batch_size_correct_flag = false
        } else {
            var max_batch_size = Number($("#batch_size_max_input_id").val())
            var flag = false
            // Set input range for "min_batch_size"
            // The value should be an integer larger than 0
            if ($("#batch_size_min_input_id").val() < 1) {
                $("#batch_size_min_input_id").val(1)
                flag = true
                is_batch_size_correct_flag = true
            } else {
                $("#batch_size_min_input_id").val(Number(val_min_batch_size))
                $("#batch_size_min_warning_id").hide()
                is_batch_size_correct_flag = true
            }
            if (!Number.isInteger(max_batch_size)) {
                $("#batch_size_max_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                if (test_val_min_batch_size >= max_batch_size) {
                    $("#batch_size_min_warning_id").show()
                    $("#batch_size_max_warning_id").show()
                    is_batch_size_correct_flag = false
                } else {
                    $("#batch_size_min_warning_id").hide()
                    $("#batch_size_max_warning_id").hide()
                    is_batch_size_correct_flag = true
                }
            }
            if (flag) {
                $("#batch_size_min_warning_id").show()
            }
        }
    })

    $("#batch_size_max_input_id").change(function(){
        var val_max_batch_size = $("#batch_size_max_input_id").val()
        test_val_max_batch_size = Number(val_max_batch_size)
        if (!Number.isInteger(test_val_max_batch_size)) {
            $("#batch_size_max_input_id").val(val_max_batch_size)
            $("#batch_size_max_warning_id").show()
            is_batch_size_correct_flag = false
        } else {
            var min_batch_size = Number($("#batch_size_min_input_id").val())
            var flag = false
            // Set input range for "max_batch_size"
            // The value should be an integer larger than "min_batch_size"
            if ($("#batch_size_max_input_id").val() > 1) {
                $("#batch_size_max_input_id").val(Number(val_max_batch_size))
                flag = true
                is_batch_size_correct_flag = true
            } else {
                $("#batch_size_max_input_id").val(2)
                $("#batch_size_max_warning_id").show()
                is_batch_size_correct_flag = true
            }
            if (!Number.isInteger(min_batch_size)) {
                $("#batch_size_min_warning_id").show()
                is_batch_size_correct_flag = false
            } else {
                if (test_val_max_batch_size <= min_batch_size) {
                    $("#batch_size_min_warning_id").show()
                    $("#batch_size_max_warning_id").show()
                    is_batch_size_correct_flag = false
                } else {
                    $("#batch_size_min_warning_id").hide()
                    $("#batch_size_max_warning_id").hide()
                    is_batch_size_correct_flag = true
                }
            }
            if (flag) {
                $("#batch_size_max_warning_id").hide()
            }
        }
    })

    $("#batch_size_step_input_id").change(function(){
        var val_step_batch_size = $("#batch_size_step_input_id").val()
        test_val_step_batch_size = Number(val_step_batch_size)
        if (!Number.isInteger(test_val_step_batch_size)) {
            $("#batch_size_step_input_id").val(val_step_batch_size)
            $("#batch_size_step_warning_id").show()
            is_batch_size_correct_flag = false
        } else {
            // Set input range for "step_batch_size"
            // The value should be an integer larger than 0
            if (Number($("#batch_size_step_input_id").val()) < 1) {
                $("#batch_size_step_input_id").val(1)
                $("#batch_size_step_warning_id").show()
                is_batch_size_correct_flag = true
            } else {
                $("#batch_size_step_input_id").val(Number(val_step_batch_size))                
                $("#batch_size_step_warning_id").hide()
                is_batch_size_correct_flag = true
            }
        }
    })

    $("#batch_size_choice_value_input_id").change(function() {
        var batch_size_choice_string = $("#batch_size_choice_value_input_id").val()
        batch_size_choice_values = batch_size_choice_string.split(",")

        is_batch_size_correct_flag = true
        if (batch_size_choice_values.length < 1 || batch_size_choice_values == "") {
            is_batch_size_correct_flag = false
        } else {
            for (let i = 0; i < batch_size_choice_values.length; i++) {
                if (!Number.isInteger(Number(batch_size_choice_values[i]))) {
                    is_batch_size_correct_flag = false
                    break
                }
            }
        }

        if (is_batch_size_correct_flag) {
            $("#batch_size_choice_value_warning_id").hide()
        } else {
            $("#batch_size_choice_value_warning_id").show()
        }
    })

    // Check latent_dim
    $("#latent_dim_min_input_id").change(function(){
        var val_min_latent_dim = $("#latent_dim_min_input_id").val()
        test_val_min_latent_dim = Number(val_min_latent_dim)
        if (!Number.isInteger(test_val_min_latent_dim)) {
            $("#latent_dim_min_input_id").val(val_min_latent_dim)
            $("#latent_dim_min_warning_id").show()
            is_latent_dim_correct_flag = false
        } else {
            var max_latent_dim = Number($("#latent_dim_max_input_id").val())
            var flag = false
            // Set input range for "min_latent_dim"
            // The value should be an integer larger than 0
            if ($("#latent_dim_min_input_id").val() < 1) {
                $("#latent_dim_min_input_id").val(1)
                flag = true
                is_latent_dim_correct_flag = true
            } else {
                $("#latent_dim_min_input_id").val(Number(val_min_latent_dim))
                $("#latent_dim_min_warning_id").hide()
                is_latent_dim_correct_flag = true
            }
            if (!Number.isInteger(max_latent_dim)) {
                $("#latent_dim_max_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                if (test_val_min_latent_dim >= max_latent_dim) {
                    $("#latent_dim_min_warning_id").show()
                    $("#latent_dim_max_warning_id").show()
                    is_latent_dim_correct_flag = false
                } else {
                    $("#latent_dim_min_warning_id").hide()
                    $("#latent_dim_max_warning_id").hide()
                    is_latent_dim_correct_flag = true
                }
            }
            if (flag) {
                $("#latent_dim_min_warning_id").show()
            }
        }
    })

    $("#latent_dim_max_input_id").change(function(){
        var val_max_latent_dim = $("#latent_dim_max_input_id").val()
        test_val_max_latent_dim = Number(val_max_latent_dim)
        if (!Number.isInteger(test_val_max_latent_dim)) {
            $("#latent_dim_max_input_id").val(val_max_latent_dim)
            $("#latent_dim_max_warning_id").show()
            is_latent_dim_correct_flag = false
        } else {
            var min_latent_dim = Number($("#latent_dim_min_input_id").val())
            var flag = false
            // Set input range for "max_latent_dim"
            // The value should be an integer larger than "min_latent_dim"
            if ($("#latent_dim_max_input_id").val() > 1) {
                $("#latent_dim_max_input_id").val(Number(val_max_latent_dim))
                flag = true
                is_latent_dim_correct_flag = true
            } else {
                $("#latent_dim_max_input_id").val(2)
                $("#latent_dim_max_warning_id").show()
                is_latent_dim_correct_flag = true
            }
            if (!Number.isInteger(min_latent_dim)) {
                $("#latent_dim_min_warning_id").show()
                is_latent_dim_correct_flag = false
            } else {
                if (test_val_max_latent_dim <= min_latent_dim) {
                    $("#latent_dim_min_warning_id").show()
                    $("#latent_dim_max_warning_id").show()
                    is_latent_dim_correct_flag = false
                } else {
                    $("#latent_dim_min_warning_id").hide()
                    $("#latent_dim_max_warning_id").hide()
                    is_latent_dim_correct_flag = true
                }
            }
            if (flag) {
                $("#latent_dim_max_warning_id").hide()
            }
        }
    })

    $("#latent_dim_step_input_id").change(function(){
        var val_step_latent_dim = $("#latent_dim_step_input_id").val()
        test_val_step_latent_dim = Number(val_step_latent_dim)
        if (!Number.isInteger(test_val_step_latent_dim)) {
            $("#latent_dim_step_input_id").val(val_step_latent_dim)
            $("#latent_dim_step_warning_id").show()
            is_latent_dim_correct_flag = false
        } else {
            // Set input range for "step_latent_dim"
            // The value should be an integer larger than 0
            if ($("#latent_dim_step_input_id").val() < 1) {
                $("#latent_dim_step_input_id").val(1)
                $("#latent_dim_step_warning_id").show()
                is_latent_dim_correct_flag = true
            } else {
                $("#latent_dim_step_input_id").val(Number(val_step_latent_dim))
                $("#latent_dim_step_warning_id").hide()
                is_latent_dim_correct_flag = true
            }
        }
    })

    $("#latent_dim_choice_value_input_id").change(function() {
        var latent_dim_choice_string = $("#latent_dim_choice_value_input_id").val()
        latent_dim_choice_values = latent_dim_choice_string.split(",")

        is_latent_dim_correct_flag = true
        if (latent_dim_choice_values.length < 1 || latent_dim_choice_values == "") {
            is_latent_dim_correct_flag = false
        } else {
            for (let i = 0; i < latent_dim_choice_values.length; i++) {
                if (!Number.isInteger(Number(latent_dim_choice_values[i]))) {
                    is_latent_dim_correct_flag = false
                    break
                }
            }
        }

        if (is_latent_dim_correct_flag) {
            $("#latent_dim_choice_value_warning_id").hide()
        } else {
            $("#latent_dim_choice_value_warning_id").show()
        }
    })

    // Check factors
    $("#factors_min_input_id").change(function(){
        var val_min_factors = $("#factors_min_input_id").val()
        test_val_min_factors = Number(val_min_factors)
        if (!Number.isInteger(test_val_min_factors)) {
            $("#factors_min_input_id").val(val_min_factors)
            $("#factors_min_warning_id").show()
            is_factors_correct_flag = false
        } else {
            var max_factors = Number($("#factors_max_input_id").val())
            var flag = false
            // Set input range for "min_factors"
            // The value should be an integer larger than 0
            if ($("#factors_min_input_id").val() < 1) {
                $("#factors_min_input_id").val(1)
                flag = true
                is_factors_correct_flag = true
            } else {
                $("#factors_min_input_id").val(Number(val_min_factors))
                $("#factors_min_warning_id").hide()
                is_factors_correct_flag = true
            }
            if (!Number.isInteger(max_factors)) {
                $("#factors_max_warning_id").show()
                is_factors_correct_flag = false
            } else {
                if (test_val_min_factors >= max_factors) {
                    $("#factors_min_warning_id").show()
                    $("#factors_max_warning_id").show()
                    is_factors_correct_flag = false
                } else {
                    $("#factors_min_warning_id").hide()
                    $("#factors_max_warning_id").hide()
                    is_factors_correct_flag = true
                }
            }
            if (flag) {
                $("#factors_min_warning_id").show()
            }
        }
    })

    $("#factors_max_input_id").change(function(){
        var val_max_factors = $("#factors_max_input_id").val()
        test_val_max_factors = Number(val_max_factors)
        if (!Number.isInteger(test_val_max_factors)) {
            $("#factors_max_input_id").val(val_max_factors)
            $("#factors_max_warning_id").show()
            is_factors_correct_flag = false
        } else {
            var min_factors = Number($("#factors_min_input_id").val())
            var flag = false
            // Set input range for "max_factors"
            // The value should be an integer larger than "min_factors"
            if ($("#factors_max_input_id").val() > 1) {
                $("#factors_max_input_id").val(Number(val_max_factors))
                flag = true
                is_factors_correct_flag = true
            } else {
                $("#factors_max_input_id").val(2)
                $("#factors_max_warning_id").show()
                is_factors_correct_flag = true
            }
            if (!Number.isInteger(min_factors)) {
                $("#factors_min_warning_id").show()
                is_factors_correct_flag = false
            } else {
                if (test_val_max_factors <= min_factors) {
                    $("#factors_min_warning_id").show()
                    $("#factors_max_warning_id").show()
                    is_factors_correct_flag = false
                } else {
                    $("#factors_min_warning_id").hide()
                    $("#factors_max_warning_id").hide()
                    is_factors_correct_flag = true
                }
            }
            if (flag) {
                $("#factors_max_warning_id").hide()
            }
        }
    })

    $("#factors_step_input_id").change(function(){
        var val_step_factors = $("#factors_step_input_id").val()
        test_val_step_factors = Number(val_step_factors)
        if (!Number.isInteger(test_val_step_factors)) {
            $("#factors_step_input_id").val(val_step_factors)
            $("#factors_step_warning_id").show()
            is_factors_correct_flag = false
        } else {
            // Set input range for "step_factors"
            // The value should be an integer larger than 0
            if ($("#factors_step_input_id").val() < 1) {
                $("#factors_step_input_id").val(1)
                $("#factors_step_warning_id").show()
                is_factors_correct_flag = true
            } else {
                $("#factors_step_input_id").val(Number(val_step_factors))
                $("#factors_step_warning_id").hide()
                is_factors_correct_flag = true
            }
        }
    })

    $("#factors_choice_value_input_id").change(function() {
        var factors_choice_string = $("#factors_choice_value_input_id").val()
        factors_choice_values = factors_choice_string.split(",")

        is_factors_correct_flag = true
        if (factors_choice_values.length < 1 || factors_choice_values == "") {
            is_factors_correct_flag = false
        } else {
            for (let i = 0; i < factors_choice_values.length; i++) {
                if (!Number.isInteger(Number(factors_choice_values[i]))) {
                    is_factors_correct_flag = false
                    break
                }
            }
        }

        if (is_factors_correct_flag) {
            $("#factors_choice_value_warning_id").hide()
        } else {
            $("#factors_choice_value_warning_id").show()
        }
    })

    // Check num_ng
    $("#num_ng_min_input_id").change(function(){
        var val_min_num_ng = $("#num_ng_min_input_id").val()
        test_val_min_num_ng = Number(val_min_num_ng)
        if (!Number.isInteger(test_val_min_num_ng)) {
            $("#num_ng_min_input_id").val(val_min_num_ng)
            $("#num_ng_min_warning_id").show()
            is_num_ng_correct_flag = false
        } else {
            var max_num_ng = Number($("#num_ng_max_input_id").val())
            var flag = false
            // Set input range for "min_num_ng"
            // The value should be an integer larger than 0
            if ($("#num_ng_min_input_id").val() < 1) {
                $("#num_ng_min_input_id").val(1)
                flag = true
                is_num_ng_correct_flag = true
            } else {
                $("#num_ng_min_input_id").val(Number(val_min_num_ng))
                $("#num_ng_min_warning_id").hide()
                is_num_ng_correct_flag = true
            }
            if (!Number.isInteger(max_num_ng)) {
                $("#num_ng_max_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                if (test_val_min_num_ng >= max_num_ng) {
                    $("#num_ng_min_warning_id").show()
                    $("#num_ng_max_warning_id").show()
                    is_num_ng_correct_flag = false
                } else {
                    $("#num_ng_min_warning_id").hide()
                    $("#num_ng_max_warning_id").hide()
                    is_num_ng_correct_flag = true
                }
            }
            if (flag) {
                $("#num_ng_min_warning_id").show()
            }
        }
    })

    $("#num_ng_max_input_id").change(function(){
        var val_max_num_ng = $("#num_ng_max_input_id").val()
        test_val_max_num_ng = Number(val_max_num_ng)
        if (!Number.isInteger(test_val_max_num_ng)) {
            $("#num_ng_max_input_id").val(val_max_num_ng)
            $("#num_ng_max_warning_id").show()
            is_num_ng_correct_flag = false
        } else {
            var min_num_ng = Number($("#num_ng_min_input_id").val())
            var flag = false
            // Set input range for "max_num_ng"
            // The value should be an integer larger than "min_num_ng"
            if ($("#num_ng_max_input_id").val() > 1) {
                $("#num_ng_max_input_id").val(Number(val_max_num_ng))
                flag = true
                is_num_ng_correct_flag = true
            } else {
                $("#num_ng_max_input_id").val(2)
                $("#num_ng_max_warning_id").show()
                is_num_ng_correct_flag = true
            }
            if (!Number.isInteger(min_num_ng)) {
                $("#num_ng_min_warning_id").show()
                is_num_ng_correct_flag = false
            } else {
                if (test_val_max_num_ng <= min_num_ng) {
                    $("#num_ng_min_warning_id").show()
                    $("#num_ng_max_warning_id").show()
                    is_num_ng_correct_flag = false
                } else {
                    $("#num_ng_min_warning_id").hide()
                    $("#num_ng_max_warning_id").hide()
                    is_num_ng_correct_flag = true
                }
            }
            if (flag) {
                $("#num_ng_max_warning_id").hide()
            }
        }
    })

    $("#num_ng_step_input_id").change(function(){
        var val_step_num_ng = $("#num_ng_step_input_id").val()
        test_val_step_num_ng = Number(val_step_num_ng)
        if (!Number.isInteger(test_val_step_num_ng)) {
            $("#num_ng_step_input_id").val(val_step_num_ng)
            $("#num_ng_step_warning_id").show()
            is_num_ng_correct_flag = false
        } else {
            // Set input range for "step_num_ng"
            // The value should be an integer larger than 0
            if ($("#num_ng_step_input_id").val() < 1) {
                $("#num_ng_step_input_id").val(1)
                $("#num_ng_step_warning_id").show()
                is_num_ng_correct_flag = true
            } else {
                $("#num_ng_step_input_id").val(Number(val_step_num_ng))
                $("#num_ng_step_warning_id").hide()
                is_num_ng_correct_flag = true
            }
        }
    })

    $("#num_ng_choice_value_input_id").change(function() {
        var num_ng_choice_string = $("#num_ng_choice_value_input_id").val()
        num_ng_choice_values = num_ng_choice_string.split(",")

        is_num_ng_correct_flag = true
        if (num_ng_choice_values.length < 1 || num_ng_choice_values == "") {
            is_num_ng_correct_flag = false
        } else {
            for (let i = 0; i < num_ng_choice_values.length; i++) {
                if (!Number.isInteger(Number(num_ng_choice_values[i]))) {
                    is_num_ng_correct_flag = false
                    break
                }
            }
        }

        if (is_num_ng_correct_flag) {
            $("#num_ng_choice_value_warning_id").hide()
        } else {
            $("#num_ng_choice_value_warning_id").show()
        }
    })

    // Check num_layers
    $("#num_layers_min_input_id").change(function(){
        var val_min_num_layers = $("#num_layers_min_input_id").val()
        test_val_min_num_layers = Number(val_min_num_layers)
        if (!Number.isInteger(test_val_min_num_layers)) {
            $("#num_layers_min_input_id").val(val_min_num_layers)
            $("#num_layers_min_warning_id").show()
            is_num_layers_correct_flag = false
        } else {
            var max_num_layers = Number($("#num_layers_max_input_id").val())
            var flag = false
            // Set input range for "min_num_layers"
            // The value should be an integer larger than 0
            if ($("#num_layers_min_input_id").val() < 1) {
                $("#num_layers_min_input_id").val(1)
                flag = true
                is_num_layers_correct_flag = true
            } else {
                $("#num_layers_min_input_id").val(Number(val_min_num_layers))
                $("#num_layers_min_warning_id").hide()
                is_num_layers_correct_flag = true
            }
            if (!Number.isInteger(max_num_layers)) {
                $("#num_layers_max_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                if (test_val_min_num_layers >= max_num_layers) {
                    $("#num_layers_min_warning_id").show()
                    $("#num_layers_max_warning_id").show()
                    is_num_layers_correct_flag = false
                } else {
                    $("#num_layers_min_warning_id").hide()
                    $("#num_layers_max_warning_id").hide()
                    is_num_layers_correct_flag = true
                }
            } 
            if (flag) {
                $("#num_layers_min_warning_id").show()
            }
        }
    })

    $("#num_layers_max_input_id").change(function(){
        var val_max_num_layers = $("#num_layers_max_input_id").val()
        test_val_max_num_layers = Number(val_max_num_layers)
        if (!Number.isInteger(test_val_max_num_layers)) {
            $("#num_layers_max_input_id").val(val_max_num_layers)
            $("#num_layers_max_warning_id").show()
            is_num_layers_correct_flag = false
        } else {
            var min_num_layers = Number($("#num_layers_min_input_id").val())
            var flag = false
            // Set input range for "max_num_layers"
            // The value should be an integer larger than "min_num_layers"
            if ($("#num_layers_max_input_id").val() > 1) {
                $("#num_layers_max_input_id").val(Number(val_max_num_layers))
                flag = true
                is_num_layers_correct_flag = true
            } else {
                $("#num_layers_max_input_id").val(2)
                $("#num_layers_max_warning_id").show()
                is_num_layers_correct_flag = true
            }
            if (!Number.isInteger(min_num_layers)) {
                $("#num_layers_min_warning_id").show()
                is_num_layers_correct_flag = false
            } else {
                if (test_val_max_num_layers <= min_num_layers) {
                    $("#num_layers_min_warning_id").show()
                    $("#num_layers_max_warning_id").show()
                    is_num_layers_correct_flag = false
                } else {
                    $("#num_layers_min_warning_id").hide()
                    $("#num_layers_max_warning_id").hide()
                    is_num_layers_correct_flag = true
                }
            }
            if (flag) {
                $("#num_layers_max_warning_id").hide()
            }
        }
    })

    $("#num_layers_step_input_id").change(function(){
        var val_step_num_layers = $("#num_layers_step_input_id").val()
        test_val_step_num_layers = Number(val_step_num_layers)
        if (!Number.isInteger(test_val_step_num_layers)) {
            $("#num_layers_step_input_id").val(val_step_num_layers)
            $("#num_layers_step_warning_id").show()
            is_num_layers_correct_flag = false
        } else {
            // Set input range for "step_num_layers"
            // The value should be an integer larger than 0
            if ($("#num_layers_step_input_id").val() < 1) {
                $("#num_layers_step_input_id").val(1)
                $("#num_layers_step_warning_id").show()
                is_num_layers_correct_flag = true
            } else {
                $("#num_layers_step_input_id").val(Number(val_step_num_layers))
                $("#num_layers_step_warning_id").hide()
                is_num_layers_correct_flag = true
            }
        }
    })

    $("#num_layers_choice_value_input_id").change(function() {
        var num_layers_choice_string = $("#num_layers_choice_value_input_id").val()
        num_layers_choice_values = num_layers_choice_string.split(",")

        is_num_layers_correct_flag = true
        if (num_layers_choice_values.length < 1 || num_layers_choice_values == "") {
            is_num_layers_correct_flag = false
        } else {
            for (let i = 0; i < num_layers_choice_values.length; i++) {
                if (!Number.isInteger(Number(num_layers_choice_values[i]))) {
                    is_num_layers_correct_flag = false
                    break
                }
            }
        }

        if (is_num_layers_correct_flag) {
            $("#num_layers_choice_value_warning_id").hide()
        } else {
            $("#num_layers_choice_value_warning_id").show()
        }
    })

    // Check maxk
    $("#maxk_min_input_id").change(function(){
        var val_min_maxk = $("#maxk_min_input_id").val()
        test_val_min_maxk = Number(val_min_maxk)
        if (!Number.isInteger(test_val_min_maxk)) {
            $("#maxk_min_input_id").val(val_min_maxk)
            $("#maxk_min_warning_id").show()
            is_maxk_correct_flag = false
        } else {
            var max_maxk = Number($("#maxk_max_input_id").val())
            var flag = false
            // Set input range for "min_maxk"
            // The value should be an integer larger than 0
            if ($("#maxk_min_input_id").val() < 1) {
                $("#maxk_min_input_id").val(1)
                flag = true
                is_maxk_correct_flag = true
            } else {
                $("#maxk_min_input_id").val(Number(val_min_maxk))
                $("#maxk_min_warning_id").hide()
                is_maxk_correct_flag = true
            }
            if (!Number.isInteger(max_maxk)) {
                $("#maxk_max_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                if (test_val_min_maxk >= max_maxk) {
                    $("#maxk_min_warning_id").show()
                    $("#maxk_max_warning_id").show()
                    is_maxk_correct_flag = false
                } else {
                    $("#maxk_min_warning_id").hide()
                    $("#maxk_max_warning_id").hide()
                    is_maxk_correct_flag = true
                }
            } 
            if (flag) {
                $("#maxk_min_warning_id").show()
            }
        }
    })

    $("#maxk_max_input_id").change(function(){
        var val_max_maxk = $("#maxk_max_input_id").val()
        test_val_max_maxk = Number(val_max_maxk)
        if (!Number.isInteger(test_val_max_maxk)) {
            $("#maxk_max_input_id").val(val_max_maxk)
            $("#maxk_max_warning_id").show()
            is_maxk_correct_flag = false
        } else {
            var min_maxk = Number($("#maxk_min_input_id").val())
            var flag = false
            // Set input range for "max_maxk"
            // The value should be an integer larger than "min_maxk"
            if ($("#maxk_max_input_id").val() > 1) {
                $("#maxk_max_input_id").val(Number(val_max_maxk))
                flag = true
                is_maxk_correct_flag = true
            } else {
                $("#maxk_max_input_id").val(2)
                $("#maxk_max_warning_id").show()
                is_maxk_correct_flag = true
            }
            if (!Number.isInteger(min_maxk)) {
                $("#maxk_min_warning_id").show()
                is_maxk_correct_flag = false
            } else {
                if (test_val_max_maxk <= min_maxk) {
                    $("#maxk_min_warning_id").show()
                    $("#maxk_max_warning_id").show()
                    is_maxk_correct_flag = false
                } else {
                    $("#maxk_min_warning_id").hide()
                    $("#maxk_max_warning_id").hide()
                    is_maxk_correct_flag = true
                }
            }
            if (flag) {
                $("#maxk_max_warning_id").hide()
            }
        }
    })

    $("#maxk_step_input_id").change(function(){
        var val_step_maxk = $("#maxk_step_input_id").val()
        test_val_step_maxk = Number(val_step_maxk)
        if (!Number.isInteger(test_val_step_maxk)) {
            $("#maxk_step_input_id").val(val_step_maxk)
            $("#maxk_step_warning_id").show()
            is_maxk_correct_flag = false
        } else {
            // Set input range for "step_maxk"
            // The value should be an integer larger than 0
            if ($("#maxk_step_input_id").val() < 1) {
                $("#maxk_step_input_id").val(1)
                $("#maxk_step_warning_id").show()
                is_maxk_correct_flag = true
            } else {
                $("#maxk_step_input_id").val(Number(val_step_maxk))
                $("#maxk_step_warning_id").hide()
                is_maxk_correct_flag = true
            }
        }
    })

    $("#maxk_choice_value_input_id").change(function() {
        var maxk_choice_string = $("#maxk_choice_value_input_id").val()
        maxk_choice_values = maxk_choice_string.split(",")

        is_maxk_correct_flag = true
        if (maxk_choice_values.length < 1 || maxk_choice_values == "") {
            is_maxk_correct_flag = false
        } else {
            for (let i = 0; i < maxk_choice_values.length; i++) {
                if (!Number.isInteger(Number(maxk_choice_values[i]))) {
                    is_maxk_correct_flag = false
                    break
                }
            }
        }

        if (is_maxk_correct_flag) {
            $("#maxk_choice_value_warning_id").hide()
        } else {
            $("#maxk_choice_value_warning_id").show()
        }
    })

    // Check context_window
    $("#context_window_min_input_id").change(function(){
        var val_min_context_window = $("#context_window_min_input_id").val()
        test_val_min_context_window = Number(val_min_context_window)
        if (!Number.isInteger(test_val_min_context_window)) {
            $("#context_window_min_input_id").val(val_min_context_window)
            $("#context_window_min_warning_id").show()
            is_context_window_correct_flag = false
        } else {
            var max_context_window = Number($("#context_window_max_input_id").val())
            var flag = false
            // Set input range for "min_context_window"
            // The value should be an integer larger than 0
            if ($("#context_window_min_input_id").val() < 1) {
                $("#context_window_min_input_id").val(1)
                flag = true
                is_context_window_correct_flag = true
            } else {
                $("#context_window_min_input_id").val(Number(val_min_context_window))
                $("#context_window_min_warning_id").hide()
                is_context_window_correct_flag = true
            }
            if (!Number.isInteger(max_context_window)) {
                $("#context_window_max_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                if (test_val_min_context_window >= max_context_window) {
                    $("#context_window_min_warning_id").show()
                    $("#context_window_max_warning_id").show()
                    is_context_window_correct_flag = false
                } else {
                    $("#context_window_min_warning_id").hide()
                    $("#context_window_max_warning_id").hide()
                    is_context_window_correct_flag = true
                }
            } 
            if (flag) {
                $("#context_window_min_warning_id").show()
            }
        }
    })

    $("#context_window_max_input_id").change(function(){
        var val_max_context_window = $("#context_window_max_input_id").val()
        test_val_max_context_window = Number(val_max_context_window)
        if (!Number.isInteger(test_val_max_context_window)) {
            $("#context_window_max_input_id").val(val_max_context_window)
            $("#context_window_max_warning_id").show()
            is_context_window_correct_flag = false
        } else {
            var min_context_window = Number($("#context_window_min_input_id").val())
            var flag = false
            // Set input range for "max_context_window"
            // The value should be an integer larger than "min_context_window"
            if ($("#context_window_max_input_id").val() > 1) {
                $("#context_window_max_input_id").val(Number(val_max_context_window))
                flag = true
                is_context_window_correct_flag = true
            } else {
                $("#context_window_max_input_id").val(2)
                $("#context_window_max_warning_id").show()
                is_context_window_correct_flag = true
            }
            if (!Number.isInteger(min_context_window)) {
                $("#context_window_min_warning_id").show()
                is_context_window_correct_flag = false
            } else {
                if (test_val_max_context_window <= min_context_window) {
                    $("#context_window_min_warning_id").show()
                    $("#context_window_max_warning_id").show()
                    is_context_window_correct_flag = false
                } else {
                    $("#context_window_min_warning_id").hide()
                    $("#context_window_max_warning_id").hide()
                    is_context_window_correct_flag = true
                }
            }
            if (flag) {
                $("#context_window_max_warning_id").hide()
            }
        }
    })

    $("#context_window_step_input_id").change(function(){
        var val_step_context_window = $("#context_window_step_input_id").val()
        test_val_step_context_window = Number(val_step_context_window)
        if (!Number.isInteger(test_val_step_context_window)) {
            $("#context_window_step_input_id").val(val_step_context_window)
            $("#context_window_step_warning_id").show()
            is_context_window_correct_flag = false
        } else {
            // Set input range for "step_context_window"
            // The value should be an integer larger than 0
            if ($("#context_window_step_input_id").val() < 1) {
                $("#context_window_step_input_id").val(1)
                $("#context_window_step_warning_id").show()
                is_context_window_correct_flag = true
            } else {
                $("#context_window_step_input_id").val(Number(val_step_context_window))
                $("#context_window_step_warning_id").hide()
                is_context_window_correct_flag = true
            }
        }
    })

    $("#context_window_choice_value_input_id").change(function() {
        var context_window_choice_string = $("#context_window_choice_value_input_id").val()
        context_window_choice_values = context_window_choice_string.split(",")

        is_context_window_correct_flag = true
        if (context_window_choice_values.length < 1 || context_window_choice_values == "") {
            is_context_window_correct_flag = false
        } else {
            for (let i = 0; i < context_window_choice_values.length; i++) {
                if (!Number.isInteger(Number(context_window_choice_values[i]))) {
                    is_context_window_correct_flag = false
                    break
                }
            }
        }

        if (is_context_window_correct_flag) {
            $("#context_window_choice_value_warning_id").hide()
        } else {
            $("#context_window_choice_value_warning_id").show()
        }
    })

    // Check dropout
    $("#dropout_min_input_id").change(function(){
        var val_min_dropout = $("#dropout_min_input_id").val()
        if (!$.isNumeric(val_min_dropout)) {
            $("#dropout_min_input_id").val(val_min_dropout)
            $("#dropout_min_warning_id").show()
            is_dropout_correct_flag = false
        } else {
            var max_dropout = Number($("#dropout_max_input_id").val())
            var flag = false
            // Set input range for "min_dropout"
            // The value should be a real number between 0 and 1
            if ($("#dropout_min_input_id").val() < 0) {
                $("#dropout_min_input_id").val(0)
                flag = true
                is_dropout_correct_flag = true
            } else if ($("#dropout_min_input_id").val() > 1) {
                $("#dropout_min_input_id").val(1)
                flag = true
                is_dropout_correct_flag = true
            } else {
                $("#dropout_min_input_id").val(Number(val_min_dropout))
                $("#dropout_min_warning_id").hide()
                is_dropout_correct_flag = true
            }
            if (!$.isNumeric(max_dropout)) {
                $("#dropout_max_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                if (val_min_dropout >= max_dropout) {
                    $("#dropout_min_warning_id").show()
                    $("#dropout_max_warning_id").show()
                    is_dropout_correct_flag = false
                } else {
                    $("#dropout_min_warning_id").hide()
                    $("#dropout_max_warning_id").hide()
                    is_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#dropout_min_warning_id").show()
            }
        }
    })

    $("#dropout_max_input_id").change(function(){
        var val_max_dropout = $("#dropout_max_input_id").val()
        if (!$.isNumeric(val_max_dropout)) {
            $("#dropout_max_input_id").val(val_max_dropout)
            $("#dropout_max_warning_id").show()
            is_dropout_correct_flag = false
        } else {
            var min_dropout = Number($("#dropout_min_input_id").val())
            var flag = false
            // Set input range for "max_dropout"
            // The value should be a real number between 0 and 1
            if ($("#dropout_max_input_id").val() < 0) {
                $("#dropout_max_input_id").val(0)
                flag = true
                is_dropout_correct_flag = true
            } else if ($("#dropout_max_input_id").val() > 1) {
                $("#dropout_max_input_id").val(1)
                flag = true
                is_dropout_correct_flag = true
            } else {
                $("#dropout_max_input_id").val(Number(val_max_dropout))
                $("#dropout_max_warning_id").hide()
                is_dropout_correct_flag = true
            }
            if (!$.isNumeric(min_dropout)) {
                $("#dropout_min_warning_id").show()
                is_dropout_correct_flag = false
            } else {
                if (val_max_dropout <= min_dropout) {
                    $("#dropout_min_warning_id").show()
                    $("#dropout_max_warning_id").show()
                    is_dropout_correct_flag = false
                } else {
                    $("#dropout_min_warning_id").hide()
                    $("#dropout_max_warning_id").hide()
                    is_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#dropout_max_warning_id").show()
            }
        }
    })

    $("#dropout_step_input_id").change(function(){
        var val_step_dropout = $("#dropout_step_input_id").val()
        if (!$.isNumeric(val_step_dropout)) {
            $("#dropout_step_input_id").val(val_step_dropout)
            $("#dropout_step_warning_id").show()
            is_dropout_correct_flag = false
        } else {
            // Set input range for "step_dropout"
            // The value should be an integer larger than 0
            if ($("#dropout_step_input_id").val() < 0) {
                $("#dropout_step_input_id").val(0)
                $("#dropout_step_warning_id").show()
                is_dropout_correct_flag = true
            } else {
                $("#dropout_step_input_id").val(Number(val_step_dropout))
                $("#dropout_step_warning_id").hide()
                is_dropout_correct_flag = true
            }
        }
    })

    $("#dropout_choice_value_input_id").change(function() {
        var dropout_choice_string = $("#dropout_choice_value_input_id").val()
        dropout_choice_values = dropout_choice_string.split(",")

        is_dropout_correct_flag = true
        if (dropout_choice_values.length < 1 || dropout_choice_values == "") {
            is_dropout_correct_flag = false
        } else {
            for (let i = 0; i < dropout_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(dropout_choice_values[i]))) {
                    is_dropout_correct_flag = false
                    break
                }
            }
        }

        if (is_dropout_correct_flag) {
            $("#dropout_choice_value_warning_id").hide()
        } else {
            $("#dropout_choice_value_warning_id").show()
        }
    })

    // Check node_dropout
    $("#node_dropout_min_input_id").change(function(){
        var val_min_node_dropout = $("#node_dropout_min_input_id").val()
        if (!$.isNumeric(val_min_node_dropout)) {
            $("#node_dropout_min_input_id").val(val_min_node_dropout)
            $("#node_dropout_min_warning_id").show()
            is_node_dropout_correct_flag = false
        } else {
            var max_node_dropout = Number($("#node_dropout_max_input_id").val())
            var flag = false
            // Set input range for "min_node_dropout"
            // The value should be a real number between 0 and 1
            if ($("#node_dropout_min_input_id").val() < 0) {
                $("#node_dropout_min_input_id").val(0)
                flag = true
                is_node_dropout_correct_flag = true
            } else if ($("#node_dropout_min_input_id").val() > 1) {
                $("#node_dropout_min_input_id").val(1)
                flag = true
                is_node_dropout_correct_flag = true
            } else {
                $("#node_dropout_min_input_id").val(Number(val_min_node_dropout))
                $("#node_dropout_min_warning_id").hide()
                is_node_dropout_correct_flag = true
            }
            if (!$.isNumeric(max_node_dropout)) {
                $("#node_dropout_max_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                if (val_min_node_dropout >= max_node_dropout) {
                    $("#node_dropout_min_warning_id").show()
                    $("#node_dropout_max_warning_id").show()
                    is_node_dropout_correct_flag = false
                } else {
                    $("#node_dropout_min_warning_id").hide()
                    $("#node_dropout_max_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#node_dropout_min_warning_id").show()
            }
        }
    })

    $("#node_dropout_max_input_id").change(function(){
        var val_max_node_dropout = $("#node_dropout_max_input_id").val()
        if (!$.isNumeric(val_max_node_dropout)) {
            $("#node_dropout_max_input_id").val(val_max_node_dropout)
            $("#node_dropout_max_warning_id").show()
            is_node_dropout_correct_flag = false
        } else {
            var min_node_dropout = Number($("#node_dropout_min_input_id").val())
            var flag = false
            // Set input range for "max_node_dropout"
            // The value should be a real number between 0 and 1
            if ($("#node_dropout_max_input_id").val() < 0) {
                $("#node_dropout_max_input_id").val(0)
                flag = true
                is_node_dropout_correct_flag = true
            } else if ($("#node_dropout_max_input_id").val() > 1) {
                $("#node_dropout_max_input_id").val(1)
                flag = true
                is_node_dropout_correct_flag = true
            } else {
                $("#node_dropout_max_input_id").val(Number(val_max_node_dropout))
                $("#node_dropout_max_warning_id").hide()
                is_node_dropout_correct_flag = true
            }
            if (!$.isNumeric(min_node_dropout)) {
                $("#node_dropout_min_warning_id").show()
                is_node_dropout_correct_flag = false
            } else {
                if (val_max_node_dropout <= min_node_dropout) {
                    $("#node_dropout_min_warning_id").show()
                    $("#node_dropout_max_warning_id").show()
                    is_node_dropout_correct_flag = false
                } else {
                    $("#node_dropout_min_warning_id").hide()
                    $("#node_dropout_max_warning_id").hide()
                    is_node_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#node_dropout_max_warning_id").show()
            }
        }
    })

    $("#node_dropout_step_input_id").change(function(){
        var val_step_node_dropout = $("#node_dropout_step_input_id").val()
        if (!$.isNumeric(val_step_node_dropout)) {
            $("#node_dropout_step_input_id").val(val_step_node_dropout)
            $("#node_dropout_step_warning_id").show()
            is_node_dropout_correct_flag = false
        } else {
            // Set input range for "step_node_dropout"
            // The value should be an integer larger than 0
            if ($("#node_dropout_step_input_id").val() < 0) {
                $("#node_dropout_step_input_id").val(0)
                $("#node_dropout_step_warning_id").show()
                is_node_dropout_correct_flag = true
            } else {
                $("#node_dropout_step_input_id").val(Number(val_step_node_dropout))
                $("#node_dropout_step_warning_id").hide()
                is_node_dropout_correct_flag = true
            }
        }
    })

    $("#node_dropout_choice_value_input_id").change(function() {
        var node_dropout_choice_string = $("#node_dropout_choice_value_input_id").val()
        node_dropout_choice_values = node_dropout_choice_string.split(",")

        is_node_dropout_correct_flag = true
        if (node_dropout_choice_values.length < 1 || node_dropout_choice_values == "") {
            is_node_dropout_correct_flag = false
        } else {
            for (let i = 0; i < node_dropout_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(node_dropout_choice_values[i]))) {
                    is_node_dropout_correct_flag = false
                    break
                }
            }
        }

        if (is_node_dropout_correct_flag) {
            $("#node_dropout_choice_value_warning_id").hide()
        } else {
            $("#node_dropout_choice_value_warning_id").show()
        }
    })

    // Check mess_dropout
    $("#mess_dropout_min_input_id").change(function(){
        var val_min_mess_dropout = $("#mess_dropout_min_input_id").val()
        if (!$.isNumeric(val_min_mess_dropout)) {
            $("#mess_dropout_min_input_id").val(val_min_mess_dropout)
            $("#mess_dropout_min_warning_id").show()
            is_mess_dropout_correct_flag = false
        } else {
            var max_mess_dropout = Number($("#mess_dropout_max_input_id").val())
            var flag = false
            // Set input range for "min_mess_dropout"
            // The value should be a real number between 0 and 1
            if ($("#mess_dropout_min_input_id").val() < 0) {
                $("#mess_dropout_min_input_id").val(0)
                flag = true
                is_mess_dropout_correct_flag = true
            } else if ($("#mess_dropout_min_input_id").val() > 1) {
                $("#mess_dropout_min_input_id").val(1)
                flag = true
                is_mess_dropout_correct_flag = true
            } else {
                $("#mess_dropout_min_input_id").val(Number(val_min_mess_dropout))
                $("#mess_dropout_min_warning_id").hide()
                is_mess_dropout_correct_flag = true
            }
            if (!$.isNumeric(max_mess_dropout)) {
                $("#mess_dropout_max_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                if (val_min_mess_dropout >= max_mess_dropout) {
                    $("#mess_dropout_min_warning_id").show()
                    $("#mess_dropout_max_warning_id").show()
                    is_mess_dropout_correct_flag = false
                } else {
                    $("#mess_dropout_min_warning_id").hide()
                    $("#mess_dropout_max_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#mess_dropout_min_warning_id").show()
            }
        }
    })

    $("#mess_dropout_max_input_id").change(function(){
        var val_max_mess_dropout = $("#mess_dropout_max_input_id").val()
        if (!$.isNumeric(val_max_mess_dropout)) {
            $("#mess_dropout_max_input_id").val(val_max_mess_dropout)
            $("#mess_dropout_max_warning_id").show()
            is_mess_dropout_correct_flag = false
        } else {
            var min_mess_dropout = Number($("#mess_dropout_min_input_id").val())
            var flag = false
            // Set input range for "max_mess_dropout"
            // The value should be a real number between 0 and 1
            if ($("#mess_dropout_max_input_id").val() < 0) {
                $("#mess_dropout_max_input_id").val(0)
                flag = true
                is_mess_dropout_correct_flag = true
            } else if ($("#mess_dropout_max_input_id").val() > 1) {
                $("#mess_dropout_max_input_id").val(1)
                flag = true
                is_mess_dropout_correct_flag = true
            } else {
                $("#mess_dropout_max_input_id").val(Number(val_max_mess_dropout))
                $("#mess_dropout_max_warning_id").hide()
                is_mess_dropout_correct_flag = true
            }
            if (!$.isNumeric(min_mess_dropout)) {
                $("#mess_dropout_min_warning_id").show()
                is_mess_dropout_correct_flag = false
            } else {
                if (val_max_mess_dropout <= min_mess_dropout) {
                    $("#mess_dropout_min_warning_id").show()
                    $("#mess_dropout_max_warning_id").show()
                    is_mess_dropout_correct_flag = false
                } else {
                    $("#mess_dropout_min_warning_id").hide()
                    $("#mess_dropout_max_warning_id").hide()
                    is_mess_dropout_correct_flag = true
                }
            } 
            if (flag) {
                $("#mess_dropout_max_warning_id").show()
            }
        }
    })

    $("#mess_dropout_step_input_id").change(function(){
        var val_step_mess_dropout = $("#mess_dropout_step_input_id").val()
        if (!$.isNumeric(val_step_mess_dropout)) {
            $("#mess_dropout_step_input_id").val(val_step_mess_dropout)
            $("#mess_dropout_step_warning_id").show()
            is_mess_dropout_correct_flag = false
        } else {
            // Set input range for "step_mess_dropout"
            // The value should be an integer larger than 0
            if ($("#mess_dropout_step_input_id").val() < 0) {
                $("#mess_dropout_step_input_id").val(0)
                $("#mess_dropout_step_warning_id").show()
                is_mess_dropout_correct_flag = true
            } else {
                $("#mess_dropout_step_input_id").val(Number(val_step_mess_dropout))
                $("#mess_dropout_step_warning_id").hide()
                is_mess_dropout_correct_flag = true
            }
        }
    })

    $("#mess_dropout_choice_value_input_id").change(function() {
        var mess_dropout_choice_string = $("#mess_dropout_choice_value_input_id").val()
        mess_dropout_choice_values = mess_dropout_choice_string.split(",")

        is_mess_dropout_correct_flag = true
        if (mess_dropout_choice_values.length < 1 || mess_dropout_choice_values == "") {
            is_mess_dropout_correct_flag = false
        } else {
            for (let i = 0; i < mess_dropout_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(mess_dropout_choice_values[i]))) {
                    is_mess_dropout_correct_flag = false
                    break
                }
            }
        }

        if (is_mess_dropout_correct_flag) {
            $("#mess_dropout_choice_value_warning_id").hide()
        } else {
            $("#mess_dropout_choice_value_warning_id").show()
        }
    })

    // Check lr
    $("#lr_min_input_id").change(function(){
        var val_min_lr = $("#lr_min_input_id").val()
        if (!$.isNumeric(val_min_lr)) {
            $("#lr_min_input_id").val(val_min_lr)
            $("#lr_min_warning_id").show()
            is_lr_correct_flag = false
        } else {
            var max_lr = Number($("#lr_max_input_id").val())
            var flag = false
            // Set input range for "min_lr"
            // The value should be a real number larger than 0
            if ($("#lr_min_input_id").val() < 0) {
                $("#lr_min_input_id").val(0)
                flag = true
                is_lr_correct_flag = true
            } else {
                $("#lr_min_input_id").val(Number(val_min_lr))
                $("#lr_min_warning_id").hide()
                is_lr_correct_flag = true
            }
            if (!$.isNumeric(max_lr)) {
                $("#lr_max_warning_id").show()
                is_lr_correct_flag = false
            } else {
                if (val_min_lr >= max_lr) {
                    $("#lr_min_warning_id").show()
                    $("#lr_max_warning_id").show()
                    is_lr_correct_flag = false
                } else {
                    $("#lr_min_warning_id").hide()
                    $("#lr_max_warning_id").hide()
                    is_lr_correct_flag = true
                }
            } 
            if (flag) {
                $("#lr_min_warning_id").show()
            }
        }
    })

    $("#lr_max_input_id").change(function(){
        var val_max_lr = $("#lr_max_input_id").val()
        if (!$.isNumeric(val_max_lr)) {
            $("#lr_max_input_id").val(val_max_lr)
            $("#lr_max_warning_id").show()
            is_lr_correct_flag = false
        } else {
            var min_lr = Number($("#lr_min_input_id").val())
            var flag = false
            // Set input range for "max_lr"
            // The value should be a real number larger than 0
            if ($("#lr_max_input_id").val() < 0) {
                $("#lr_max_input_id").val(0)
                flag = true
                is_lr_correct_flag = true
            } else {
                $("#lr_max_input_id").val(Number(val_max_lr))
                $("#lr_max_warning_id").hide()
                is_lr_correct_flag = true
            }
            if (!$.isNumeric(min_lr)) {
                $("#lr_min_warning_id").show()
                is_lr_correct_flag = false
            } else {
                if (val_max_lr <= min_lr) {
                    $("#lr_min_warning_id").show()
                    $("#lr_max_warning_id").show()
                    is_lr_correct_flag = false
                } else {
                    $("#lr_min_warning_id").hide()
                    $("#lr_max_warning_id").hide()
                    is_lr_correct_flag = true
                }
            } 
            if (flag) {
                $("#lr_max_warning_id").show()
            }
        }
    })

    $("#lr_step_input_id").change(function(){
        var val_step_lr = $("#lr_step_input_id").val()
        if (!$.isNumeric(val_step_lr)) {
            $("#lr_step_input_id").val(val_step_lr)
            $("#lr_step_warning_id").show()
            is_lr_correct_flag = false
        } else {
            // Set input range for "step_lr"
            // The value should be an integer larger than 0
            if ($("#lr_step_input_id").val() < 0) {
                $("#lr_step_input_id").val(0)
                $("#lr_step_warning_id").show()
                is_lr_correct_flag = true
            } else {
                $("#lr_step_input_id").val(Number(val_step_lr))
                $("#lr_step_warning_id").hide()
                is_lr_correct_flag = true
            }
        }
    })

    $("#lr_choice_value_input_id").change(function() {
        var lr_choice_string = $("#lr_choice_value_input_id").val()
        lr_choice_values = lr_choice_string.split(",")

        is_lr_correct_flag = true
        if (lr_choice_values.length < 1 || lr_choice_values == "") {
            is_lr_correct_flag = false
        } else {
            for (let i = 0; i < lr_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(lr_choice_values[i]))) {
                    is_lr_correct_flag = false
                    break
                }
            }
        }

        if (is_lr_correct_flag) {
            $("#lr_choice_value_warning_id").hide()
        } else {
            $("#lr_choice_value_warning_id").show()
        }
    })

    // Check anneal_cap
    $("#anneal_cap_min_input_id").change(function(){
        var val_min_anneal_cap = $("#anneal_cap_min_input_id").val()
        if (!$.isNumeric(val_min_anneal_cap)) {
            $("#anneal_cap_min_input_id").val(val_min_anneal_cap)
            $("#anneal_cap_min_warning_id").show()
            is_anneal_cap_correct_flag = false
        } else {
            var max_anneal_cap = Number($("#anneal_cap_max_input_id").val())
            var flag = false
            // Set input range for "min_anneal_cap"
            // The value should be a real number larger than 0
            if ($("#anneal_cap_min_input_id").val() < 0) {
                $("#anneal_cap_min_input_id").val(0)
                flag = true
                is_anneal_cap_correct_flag = true
            } else {
                $("#anneal_cap_min_input_id").val(Number(val_min_anneal_cap))
                $("#anneal_cap_min_warning_id").hide()
                is_anneal_cap_correct_flag = true
            }
            if (!$.isNumeric(max_anneal_cap)) {
                $("#anneal_cap_max_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                if (val_min_anneal_cap >= max_anneal_cap) {
                    $("#anneal_cap_min_warning_id").show()
                    $("#anneal_cap_max_warning_id").show()
                    is_anneal_cap_correct_flag = false
                } else {
                    $("#anneal_cap_min_warning_id").hide()
                    $("#anneal_cap_max_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
            } 
            if (flag) {
                $("#anneal_cap_min_warning_id").show()
            }
        }
    })

    $("#anneal_cap_max_input_id").change(function(){
        var val_max_anneal_cap = $("#anneal_cap_max_input_id").val()
        if (!$.isNumeric(val_max_anneal_cap)) {
            $("#anneal_cap_max_input_id").val(val_max_anneal_cap)
            $("#anneal_cap_max_warning_id").show()
            is_anneal_cap_correct_flag = false
        } else {
            var min_anneal_cap = Number($("#anneal_cap_min_input_id").val())
            var flag = false
            // Set input range for "max_anneal_cap"
            // The value should be a real number larger than 0
            if ($("#anneal_cap_max_input_id").val() < 0) {
                $("#anneal_cap_max_input_id").val(0)
                flag = true
                is_anneal_cap_correct_flag = true
            } else {
                $("#anneal_cap_max_input_id").val(Number(val_max_anneal_cap))
                $("#anneal_cap_max_warning_id").hide()
                is_anneal_cap_correct_flag = true
            }
            if (!$.isNumeric(min_anneal_cap)) {
                $("#anneal_cap_min_warning_id").show()
                is_anneal_cap_correct_flag = false
            } else {
                if (val_max_anneal_cap <= min_anneal_cap) {
                    $("#anneal_cap_min_warning_id").show()
                    $("#anneal_cap_max_warning_id").show()
                    is_anneal_cap_correct_flag = false
                } else {
                    $("#anneal_cap_min_warning_id").hide()
                    $("#anneal_cap_max_warning_id").hide()
                    is_anneal_cap_correct_flag = true
                }
            } 
            if (flag) {
                $("#anneal_cap_max_warning_id").show()
            }
        }
    })

    $("#anneal_cap_step_input_id").change(function(){
        var val_step_anneal_cap = $("#anneal_cap_step_input_id").val()
        if (!$.isNumeric(val_step_anneal_cap)) {
            $("#anneal_cap_step_input_id").val(val_step_anneal_cap)
            $("#anneal_cap_step_warning_id").show()
            is_anneal_cap_correct_flag = false
        } else {
            // Set input range for "step_anneal_cap"
            // The value should be an integer larger than 0
            if ($("#anneal_cap_step_input_id").val() < 0) {
                $("#anneal_cap_step_input_id").val(0)
                $("#anneal_cap_step_warning_id").show()
                is_anneal_cap_correct_flag = true
            } else {
                $("#anneal_cap_step_input_id").val(Number(val_step_anneal_cap))
                $("#anneal_cap_step_warning_id").hide()
                is_anneal_cap_correct_flag = true
            }
        }
    })

    $("#anneal_cap_choice_value_input_id").change(function() {
        var anneal_cap_choice_string = $("#anneal_cap_choice_value_input_id").val()
        anneal_cap_choice_values = anneal_cap_choice_string.split(",")

        is_anneal_cap_correct_flag = true
        if (anneal_cap_choice_values.length < 1 || anneal_cap_choice_values == "") {
            is_anneal_cap_correct_flag = false
        } else {
            for (let i = 0; i < anneal_cap_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(anneal_cap_choice_values[i]))) {
                    is_anneal_cap_correct_flag = false
                    break
                }
            }
        }

        if (is_anneal_cap_correct_flag) {
            $("#anneal_cap_choice_value_warning_id").hide()
        } else {
            $("#anneal_cap_choice_value_warning_id").show()
        }
    })

    // Check reg_1
    $("#reg1_min_input_id").change(function(){
        var val_min_reg1 = $("#reg1_min_input_id").val()
        if (!$.isNumeric(val_min_reg1)) {
            $("#reg1_min_input_id").val(val_min_reg1)
            $("#reg1_min_warning_id").show()
            is_reg1_correct_flag = false
        } else {
            var max_reg1 = Number($("#reg1_max_input_id").val())
            var flag = false
            // Set input range for "min_reg1"
            // The value should be a real number larger than 0
            if ($("#reg1_min_input_id").val() < 0) {
                $("#reg1_min_input_id").val(0)
                flag = true
                is_reg1_correct_flag = true
            } else {
                $("#reg1_min_input_id").val(Number(val_min_reg1))
                $("#reg1_min_warning_id").hide()
                is_reg1_correct_flag = true
            }
            if (!$.isNumeric(max_reg1)) {
                $("#reg1_max_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                if (val_min_reg1 >= max_reg1) {
                    $("#reg1_min_warning_id").show()
                    $("#reg1_max_warning_id").show()
                    is_reg1_correct_flag = false
                } else {
                    $("#reg1_min_warning_id").hide()
                    $("#reg1_max_warning_id").hide()
                    is_reg1_correct_flag = true
                }
            } 
            if (flag) {
                $("#reg1_min_warning_id").show()
            }
        }
    })

    $("#reg1_max_input_id").change(function(){
        var val_max_reg1 = $("#reg1_max_input_id").val()
        if (!$.isNumeric(val_max_reg1)) {
            $("#reg1_max_input_id").val(val_max_reg1)
            $("#reg1_max_warning_id").show()
            is_reg1_correct_flag = false
        } else {
            var min_reg1 = Number($("#reg1_min_input_id").val())
            var flag = false
            // Set input range for "max_reg1"
            // The value should be a real number larger than 0
            if ($("#reg1_max_input_id").val() < 0) {
                $("#reg1_max_input_id").val(0)
                flag = true
                is_reg1_correct_flag = true
            } else {
                $("#reg1_max_input_id").val(Number(val_max_reg1))
                $("#reg1_max_warning_id").hide()
                is_reg1_correct_flag = true
            }
            if (!$.isNumeric(min_reg1)) {
                $("#reg1_min_warning_id").show()
                is_reg1_correct_flag = false
            } else {
                if (val_max_reg1 <= min_reg1) {
                    $("#reg1_min_warning_id").show()
                    $("#reg1_max_warning_id").show()
                    is_reg1_correct_flag = false
                } else {
                    $("#reg1_min_warning_id").hide()
                    $("#reg1_max_warning_id").hide()
                    is_reg1_correct_flag = true
                }
            } 
            if (flag) {
                $("#reg1_max_warning_id").show()
            }
        }
    })

    $("#reg1_step_input_id").change(function(){
        var val_step_reg1 = $("#reg1_step_input_id").val()
        if (!$.isNumeric(val_step_reg1)) {
            $("#reg1_step_input_id").val(val_step_reg1)
            $("#reg1_step_warning_id").show()
            is_reg1_correct_flag = false
        } else {
            // Set input range for "step_reg1"
            // The value should be an integer larger than 0
            if ($("#reg1_step_input_id").val() < 0) {
                $("#reg1_step_input_id").val(0)
                $("#reg1_step_warning_id").show()
                is_reg1_correct_flag = true
            } else {
                $("#reg1_step_input_id").val(Number(val_step_reg1))
                $("#reg1_step_warning_id").hide()
                is_reg1_correct_flag = true
            }
        }
    })

    $("#reg1_choice_value_input_id").change(function() {
        var reg1_choice_string = $("#reg1_choice_value_input_id").val()
        reg1_choice_values = reg1_choice_string.split(",")

        is_reg1_correct_flag = true
        if (reg1_choice_values.length < 1 || reg1_choice_values == "") {
            is_reg1_correct_flag = false
        } else {
            for (let i = 0; i < reg1_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(reg1_choice_values[i]))) {
                    is_reg1_correct_flag = false
                    break
                }
            }
        }

        if (is_reg1_correct_flag) {
            $("#reg1_choice_value_warning_id").hide()
        } else {
            $("#reg1_choice_value_warning_id").show()
        }
    })

    // Check reg_2
    $("#reg2_min_input_id").change(function(){
        var val_min_reg2 = $("#reg2_min_input_id").val()
        if (!$.isNumeric(val_min_reg2)) {
            $("#reg2_min_input_id").val(val_min_reg2)
            $("#reg2_min_warning_id").show()
            is_reg2_correct_flag = false
        } else {
            var max_reg2 = Number($("#reg2_max_input_id").val())
            var flag = false
            // Set input range for "min_reg2"
            // The value should be a real number larger than 0
            if ($("#reg2_min_input_id").val() < 0) {
                $("#reg2_min_input_id").val(0)
                flag = true
                is_reg2_correct_flag = true
            } else {
                $("#reg2_min_input_id").val(Number(val_min_reg2))
                $("#reg2_min_warning_id").hide()
                is_reg2_correct_flag = true
            }
            if (!$.isNumeric(max_reg2)) {
                $("#reg2_max_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                if (val_min_reg2 >= max_reg2) {
                    $("#reg2_min_warning_id").show()
                    $("#reg2_max_warning_id").show()
                    is_reg2_correct_flag = false
                } else {
                    $("#reg2_min_warning_id").hide()
                    $("#reg2_max_warning_id").hide()
                    is_reg2_correct_flag = true
                }
            } 
            if (flag) {
                $("#reg2_min_warning_id").show()
            }
        }
    })

    $("#reg2_max_input_id").change(function(){
        var val_max_reg2 = $("#reg2_max_input_id").val()
        if (!$.isNumeric(val_max_reg2)) {
            $("#reg2_max_input_id").val(val_max_reg2)
            $("#reg2_max_warning_id").show()
            is_reg2_correct_flag = false
        } else {
            var min_reg2 = Number($("#reg2_min_input_id").val())
            var flag = false
            // Set input range for "max_reg2"
            // The value should be a real number larger than 0
            if ($("#reg2_max_input_id").val() < 0) {
                $("#reg2_max_input_id").val(0)
                flag = true
                is_reg2_correct_flag = true
            } else {
                $("#reg2_max_input_id").val(Number(val_max_reg2))
                $("#reg2_max_warning_id").hide()
                is_reg2_correct_flag = true
            }
            if (!$.isNumeric(min_reg2)) {
                $("#reg2_min_warning_id").show()
                is_reg2_correct_flag = false
            } else {
                if (val_max_reg2 <= min_reg2) {
                    $("#reg2_min_warning_id").show()
                    $("#reg2_max_warning_id").show()
                    is_reg2_correct_flag = false
                } else {
                    $("#reg2_min_warning_id").hide()
                    $("#reg2_max_warning_id").hide()
                    is_reg2_correct_flag = true
                }
            } 
            if (flag) {
                $("#reg2_max_warning_id").show()
            }
        }
    })

    $("#reg2_step_input_id").change(function(){
        var val_step_reg2 = $("#reg2_step_input_id").val()
        if (!$.isNumeric(val_step_reg2)) {
            $("#reg2_step_input_id").val(val_step_reg2)
            $("#reg2_step_warning_id").show()
            is_reg2_correct_flag = false
        } else {
            // Set input range for "step_reg2"
            // The value should be an integer larger than 0
            if ($("#reg2_step_input_id").val() < 0) {
                $("#reg2_step_input_id").val(0)
                $("#reg2_step_warning_id").show()
                is_reg2_correct_flag = true
            } else {
                $("#reg2_step_input_id").val(Number(val_step_reg2))
                $("#reg2_step_warning_id").hide()
                is_reg2_correct_flag = true
            }
        }
    })

    $("#reg2_choice_value_input_id").change(function() {
        var reg2_choice_string = $("#reg2_choice_value_input_id").val()
        reg2_choice_values = reg2_choice_string.split(",")

        is_reg2_correct_flag = true
        if (reg2_choice_values.length < 1 || reg2_choice_values == "") {
            is_reg2_correct_flag = false
        } else {
            for (let i = 0; i < reg2_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(reg2_choice_values[i]))) {
                    is_reg2_correct_flag = false
                    break
                }
            }
        }

        if (is_reg2_correct_flag) {
            $("#reg2_choice_value_warning_id").hide()
        } else {
            $("#reg2_choice_value_warning_id").show()
        }
    })

    // Check alpha
    $("#alpha_min_input_id").change(function(){
        var val_min_alpha = $("#alpha_min_input_id").val()
        if (!$.isNumeric(val_min_alpha)) {
            $("#alpha_min_input_id").val(val_min_alpha)
            $("#alpha_min_warning_id").show()
            is_alpha_correct_flag = false
        } else {
            var max_alpha = Number($("#alpha_max_input_id").val())
            var flag = false
            // Set input range for "min_alpha"
            // The value should be a real number larger than 0
            if ($("#alpha_min_input_id").val() < 0) {
                $("#alpha_min_input_id").val(0)
                flag = true
                is_alpha_correct_flag = true
            } else {
                $("#alpha_min_input_id").val(Number(val_min_alpha))
                $("#alpha_min_warning_id").hide()
                is_alpha_correct_flag = true
            }
            if (!$.isNumeric(max_alpha)) {
                $("#alpha_max_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                if (val_min_alpha >= max_alpha) {
                    $("#alpha_min_warning_id").show()
                    $("#alpha_max_warning_id").show()
                    is_alpha_correct_flag = false
                } else {
                    $("#alpha_min_warning_id").hide()
                    $("#alpha_max_warning_id").hide()
                    is_alpha_correct_flag = true
                }
            } 
            if (flag) {
                $("#alpha_min_warning_id").show()
            }
        }
    })

    $("#alpha_max_input_id").change(function(){
        var val_max_alpha = $("#alpha_max_input_id").val()
        if (!$.isNumeric(val_max_alpha)) {
            $("#alpha_max_input_id").val(val_max_alpha)
            $("#alpha_max_warning_id").show()
            is_alpha_correct_flag = false
        } else {
            var min_alpha = Number($("#alpha_min_input_id").val())
            var flag = false
            // Set input range for "max_alpha"
            // The value should be a real number larger than 0
            if ($("#alpha_max_input_id").val() < 0) {
                $("#alpha_max_input_id").val(0)
                flag = true
                is_alpha_correct_flag = true
            } else {
                $("#alpha_max_input_id").val(Number(val_max_alpha))
                $("#alpha_max_warning_id").hide()
                is_alpha_correct_flag = true
            }
            if (!$.isNumeric(min_alpha)) {
                $("#alpha_min_warning_id").show()
                is_alpha_correct_flag = false
            } else {
                if (val_max_alpha <= min_alpha) {
                    $("#alpha_min_warning_id").show()
                    $("#alpha_max_warning_id").show()
                    is_alpha_correct_flag = false
                } else {
                    $("#alpha_min_warning_id").hide()
                    $("#alpha_max_warning_id").hide()
                    is_alpha_correct_flag = true
                }
            } 
            if (flag) {
                $("#alpha_max_warning_id").show()
            }
        }
    })

    $("#alpha_step_input_id").change(function(){
        var val_step_alpha = $("#alpha_step_input_id").val()
        if (!$.isNumeric(val_step_alpha)) {
            $("#alpha_step_input_id").val(val_step_alpha)
            $("#alpha_step_warning_id").show()
            is_alpha_correct_flag = false
        } else {
            // Set input range for "step_alpha"
            // The value should be an integer larger than 0
            if ($("#alpha_step_input_id").val() < 0) {
                $("#alpha_step_input_id").val(0)
                $("#alpha_step_warning_id").show()
                is_alpha_correct_flag = true
            } else {
                $("#alpha_step_input_id").val(Number(val_step_alpha))
                $("#alpha_step_warning_id").hide()
                is_alpha_correct_flag = true
            }
        }
    })

    $("#alpha_choice_value_input_id").change(function() {
        var alpha_choice_string = $("#alpha_choice_value_input_id").val()
        alpha_choice_values = alpha_choice_string.split(",")

        is_alpha_correct_flag = true
        if (alpha_choice_values.length < 1 || alpha_choice_values == "") {
            is_alpha_correct_flag = false
        } else {
            for (let i = 0; i < alpha_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(alpha_choice_values[i]))) {
                    is_alpha_correct_flag = false
                    break
                }
            }
        }

        if (is_alpha_correct_flag) {
            $("#alpha_choice_value_warning_id").hide()
        } else {
            $("#alpha_choice_value_warning_id").show()
        }
    })

    // Check elastic
    $("#elastic_min_input_id").change(function(){
        var val_min_elastic = $("#elastic_min_input_id").val()
        if (!$.isNumeric(val_min_elastic)) {
            $("#elastic_min_input_id").val(val_min_elastic)
            $("#elastic_min_warning_id").show()
            is_elastic_correct_flag = false
        } else {
            var max_elastic = Number($("#elastic_max_input_id").val())
            var flag = false
            // Set input range for "min_elastic"
            // The value should be a real number larger than 0
            if ($("#elastic_min_input_id").val() < 0) {
                $("#elastic_min_input_id").val(0)
                flag = true
                is_elastic_correct_flag = true
            } else {
                $("#elastic_min_input_id").val(Number(val_min_elastic))
                $("#elastic_min_warning_id").hide()
                is_elastic_correct_flag = true
            }
            if (!$.isNumeric(max_elastic)) {
                $("#elastic_max_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                if (val_min_elastic >= max_elastic) {
                    $("#elastic_min_warning_id").show()
                    $("#elastic_max_warning_id").show()
                    is_elastic_correct_flag = false
                } else {
                    $("#elastic_min_warning_id").hide()
                    $("#elastic_max_warning_id").hide()
                    is_elastic_correct_flag = true
                }
            } 
            if (flag) {
                $("#elastic_min_warning_id").show()
            }
        }
    })

    $("#elastic_max_input_id").change(function(){
        var val_max_elastic = $("#elastic_max_input_id").val()
        if (!$.isNumeric(val_max_elastic)) {
            $("#elastic_max_input_id").val(val_max_elastic)
            $("#elastic_max_warning_id").show()
            is_elastic_correct_flag = false
        } else {
            var min_elastic = Number($("#elastic_min_input_id").val())
            var flag = false
            // Set input range for "max_elastic"
            // The value should be a real number larger than 0
            if ($("#elastic_max_input_id").val() < 0) {
                $("#elastic_max_input_id").val(0)
                flag = true
                is_elastic_correct_flag = true
            } else {
                $("#elastic_max_input_id").val(Number(val_max_elastic))
                $("#elastic_max_warning_id").hide()
                is_elastic_correct_flag = true
            }
            if (!$.isNumeric(min_elastic)) {
                $("#elastic_min_warning_id").show()
                is_elastic_correct_flag = false
            } else {
                if (val_max_elastic <= min_elastic) {
                    $("#elastic_min_warning_id").show()
                    $("#elastic_max_warning_id").show()
                    is_elastic_correct_flag = false
                } else {
                    $("#elastic_min_warning_id").hide()
                    $("#elastic_max_warning_id").hide()
                    is_elastic_correct_flag = true
                }
            } 
            if (flag) {
                $("#elastic_max_warning_id").show()
            }
        }
    })

    $("#elastic_step_input_id").change(function(){
        var val_step_elastic = $("#elastic_step_input_id").val()
        if (!$.isNumeric(val_step_elastic)) {
            $("#elastic_step_input_id").val(val_step_elastic)
            $("#elastic_step_warning_id").show()
            is_elastic_correct_flag = false
        } else {
            // Set input range for "step_elastic"
            // The value should be an integer larger than 0
            if ($("#elastic_step_input_id").val() < 0) {
                $("#elastic_step_input_id").val(0)
                $("#elastic_step_warning_id").show()
                is_elastic_correct_flag = true
            } else {
                $("#elastic_step_input_id").val(Number(val_step_elastic))
                $("#elastic_step_warning_id").hide()
                is_elastic_correct_flag = true
            }
        }
    })

    $("#elastic_choice_value_input_id").change(function() {
        var elastic_choice_string = $("#elastic_choice_value_input_id").val()
        elastic_choice_values = elastic_choice_string.split(",")

        is_elastic_correct_flag = true
        if (elastic_choice_values.length < 1 || elastic_choice_values == "") {
            is_elastic_correct_flag = false
        } else {
            for (let i = 0; i < elastic_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(elastic_choice_values[i]))) {
                    is_elastic_correct_flag = false
                    break
                }
            }
        }

        if (is_elastic_correct_flag) {
            $("#elastic_choice_value_warning_id").hide()
        } else {
            $("#elastic_choice_value_warning_id").show()
        }
    })

    // Check rho
    $("#rho_min_input_id").change(function(){
        var val_min_rho = $("#rho_min_input_id").val()
        if (!$.isNumeric(val_min_rho)) {
            $("#rho_min_input_id").val(val_min_rho)
            $("#rho_min_warning_id").show()
            is_rho_correct_flag = false
        } else {
            var max_rho = Number($("#rho_max_input_id").val())
            var flag = false
            // Set input range for "min_rho"
            // The value should be a real number larger than 0
            if ($("#rho_min_input_id").val() < 0) {
                $("#rho_min_input_id").val(0)
                flag = true
                is_rho_correct_flag = true
            } else {
                $("#rho_min_input_id").val(Number(val_min_rho))
                $("#rho_min_warning_id").hide()
                is_rho_correct_flag = true
            }
            if (!$.isNumeric(max_rho)) {
                $("#rho_max_warning_id").show()
                is_rho_correct_flag = false
            } else {
                if (val_min_rho >= max_rho) {
                    $("#rho_min_warning_id").show()
                    $("#rho_max_warning_id").show()
                    is_rho_correct_flag = false
                } else {
                    $("#rho_min_warning_id").hide()
                    $("#rho_max_warning_id").hide()
                    is_rho_correct_flag = true
                }
            } 
            if (flag) {
                $("#rho_min_warning_id").show()
            }
        }
    })

    $("#rho_max_input_id").change(function(){
        var val_max_rho = $("#rho_max_input_id").val()
        if (!$.isNumeric(val_max_rho)) {
            $("#rho_max_input_id").val(val_max_rho)
            $("#rho_max_warning_id").show()
            is_rho_correct_flag = false
        } else {
            var min_rho = Number($("#rho_min_input_id").val())
            var flag = false
            // Set input range for "max_rho"
            // The value should be a real number larger than 0
            if ($("#rho_max_input_id").val() < 0) {
                $("#rho_max_input_id").val(0)
                flag = true
                is_rho_correct_flag = true
            } else {
                $("#rho_max_input_id").val(Number(val_max_rho))
                $("#rho_max_warning_id").hide()
                is_rho_correct_flag = true
            }
            if (!$.isNumeric(min_rho)) {
                $("#rho_min_warning_id").show()
                is_rho_correct_flag = false
            } else {
                if (val_max_rho <= min_rho) {
                    $("#rho_min_warning_id").show()
                    $("#rho_max_warning_id").show()
                    is_rho_correct_flag = false
                } else {
                    $("#rho_min_warning_id").hide()
                    $("#rho_max_warning_id").hide()
                    is_rho_correct_flag = true
                }
            } 
            if (flag) {
                $("#rho_max_warning_id").show()
            }
        }
    })

    $("#rho_step_input_id").change(function(){
        var val_step_rho = $("#rho_step_input_id").val()
        if (!$.isNumeric(val_step_rho)) {
            $("#rho_step_input_id").val(val_step_rho)
            $("#rho_step_warning_id").show()
            is_rho_correct_flag = false
        } else {
            // Set input range for "step_rho"
            // The value should be an integer larger than 0
            if ($("#rho_step_input_id").val() < 0) {
                $("#rho_step_input_id").val(0)
                $("#rho_step_warning_id").show()
                is_rho_correct_flag = true
            } else {
                $("#rho_step_input_id").val(Number(val_step_rho))
                $("#rho_step_warning_id").hide()
                is_rho_correct_flag = true
            }
        }
    })

    $("#rho_choice_value_input_id").change(function() {
        var rho_choice_string = $("#rho_choice_value_input_id").val()
        rho_choice_values = rho_choice_string.split(",")

        is_rho_correct_flag = true
        if (rho_choice_values.length < 1 || rho_choice_values == "") {
            is_rho_correct_flag = false
        } else {
            for (let i = 0; i < rho_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(rho_choice_values[i]))) {
                    is_rho_correct_flag = false
                    break
                }
            }
        }

        if (is_rho_correct_flag) {
            $("#rho_choice_value_warning_id").hide()
        } else {
            $("#rho_choice_value_warning_id").show()
        }
    })

    // Check reg
    $("#reg_min_input_id").change(function(){
        var val_min_reg = $("#reg_min_input_id").val()
        if (!$.isNumeric(val_min_reg)) {
            $("#reg_min_input_id").val(val_min_reg)
            $("#reg_min_warning_id").show()
            is_reg_correct_flag = false
        } else {
            var max_reg = Number($("#reg_max_input_id").val())
            var flag = false
            // Set input range for "min_reg"
            // The value should be a real number larger than 0
            if ($("#reg_min_input_id").val() < 0) {
                $("#reg_min_input_id").val(0)
                flag = true
                is_reg_correct_flag = true
            } else {
                $("#reg_min_input_id").val(Number(val_min_reg))
                $("#reg_min_warning_id").hide()
                is_reg_correct_flag = true
            }
            if (!$.isNumeric(max_reg)) {
                $("#reg_max_warning_id").show()
                is_reg_correct_flag = false
            } else {
                if (val_min_reg >= max_reg) {
                    $("#reg_min_warning_id").show()
                    $("#reg_max_warning_id").show()
                    is_reg_correct_flag = false
                } else {
                    $("#reg_min_warning_id").hide()
                    $("#reg_max_warning_id").hide()
                    is_reg_correct_flag = true
                }
            } 
            if (flag) {
                $("#reg_min_warning_id").show()
            }
        }
    })

    $("#reg_max_input_id").change(function(){
        var val_max_reg = $("#reg_max_input_id").val()
        if (!$.isNumeric(val_max_reg)) {
            $("#reg_max_input_id").val(val_max_reg)
            $("#reg_max_warning_id").show()
            is_reg_correct_flag = false
        } else {
            var min_reg = Number($("#reg_min_input_id").val())
            var flag = false
            // Set input range for "max_reg"
            // The value should be a real number larger than 0
            if ($("#reg_max_input_id").val() < 0) {
                $("#reg_max_input_id").val(0)
                flag = true
                is_reg_correct_flag = true
            } else {
                $("#reg_max_input_id").val(Number(val_max_reg))
                $("#reg_max_warning_id").hide()
                is_reg_correct_flag = true
            }
            if (!$.isNumeric(min_reg)) {
                $("#reg_min_warning_id").show()
                is_reg_correct_flag = false
            } else {
                if (val_max_reg <= min_reg) {
                    $("#reg_min_warning_id").show()
                    $("#reg_max_warning_id").show()
                    is_reg_correct_flag = false
                } else {
                    $("#reg_min_warning_id").hide()
                    $("#reg_max_warning_id").hide()
                    is_reg_correct_flag = true
                }
            }
            if (flag) {
                $("#reg_max_warning_id").show()
            }
        }
    })

    $("#reg_step_input_id").change(function(){
        var val_step_reg = $("#reg_step_input_id").val()
        if (!$.isNumeric(val_step_reg)) {
            $("#reg_step_input_id").val(val_step_reg)
            $("#reg_step_warning_id").show()
            is_reg_correct_flag = false
        } else {
            // Set input range for "step_reg"
            // The value should be an integer larger than 0
            if ($("#reg_step_input_id").val() < 0) {
                $("#reg_step_input_id").val(0)
                $("#reg_step_warning_id").show()
                is_reg_correct_flag = true
            } else {
                $("#reg_step_input_id").val(Number(val_step_reg))
                $("#reg_step_warning_id").hide()
                is_reg_correct_flag = true
            }
        }
    })

    $("#reg_choice_value_input_id").change(function() {
        var reg_choice_string = $("#reg_choice_value_input_id").val()
        reg_choice_values = reg_choice_string.split(",")

        is_reg_correct_flag = true
        if (reg_choice_values.length < 1 || reg_choice_values == "") {
            is_reg_correct_flag = false
        } else {
            for (let i = 0; i < reg_choice_values.length; i++) {
                if (!$.isNumeric(parseFloat(reg_choice_values[i]))) {
                    is_reg_correct_flag = false
                    break
                }
            }
        }

        if (is_reg_correct_flag) {
            $("#reg_choice_value_warning_id").hide()
        } else {
            $("#reg_choice_value_warning_id").show()
        }
    })

    // Changes if the Second "Submit" button has been clicked
    $("#submit-btn2_id").click(function () {
        if ($("#submit-btn2_id").html() == "Submit") {
            if (is_batch_size_correct_flag &&
                is_latent_dim_correct_flag &&
                is_dropout_correct_flag &&
                is_lr_correct_flag &&
                is_anneal_cap_correct_flag &&
                is_factors_correct_flag &&
                is_num_ng_correct_flag &&
                is_node_dropout_correct_flag &&
                is_mess_dropout_correct_flag &&
                is_reg1_correct_flag &&
                is_reg2_correct_flag &&
                is_num_layers_correct_flag &&
                is_maxk_correct_flag &&
                is_alpha_correct_flag &&
                is_elastic_correct_flag &&
                is_context_window_correct_flag &&
                is_rho_correct_flag &&
                is_reg_correct_flag) {
                $("#page-title3_id").show()
                $("#third_card_id").show()
                $(document).scrollTop($(document).height())
                $("#submit-btn1_id").hide()
                $("#submit-btn2_id").html("Reset");
                $("#submit-btn2_id").removeClass("btn btn-outline-primary").addClass("btn btn-outline-success")

                $("#optimization_metric_selector_id").attr("Disabled", "Disabled")
                $("#hyperopt_trail_input_id").attr("Disabled", "Disabled")
                $("#algo_name_selector_id").attr("Disabled", "Disabled")
                $("#dataset_selector_id").attr("Disabled", "Disabled")
                $("#preprocess_selector_id").attr("Disabled", "Disabled")
                $("#preprocess_number_input_id").attr("Disabled", "Disabled")
                $("#topk_input_id").attr("Disabled", "Disabled")
                $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#epoch_input_id").attr("Disabled", "Disabled")
                $("#test_size_input_id").attr("Disabled", "Disabled")
                $("#val_size_input_id").attr("Disabled", "Disabled")
                $("#cand_num_input_id").attr("Disabled", "Disabled")
                $("#gpu_input_id").attr("Disabled", "Disabled")
                $("#init_method_selector_id").attr("Disabled", "Disabled")
                $("#optimizer_selector_id").attr("Disabled", "Disabled")
                $("#early_stop_selector_id").attr("Disabled", "Disabled")
                $("#loss_type_selector_id").attr("Disabled", "Disabled")
                $("#test_method_selector_id").attr("Disabled", "Disabled")
                $("#val_method_selector_id").attr("Disabled", "Disabled")
                $("#sample_method_selector_id").attr("Disabled", "Disabled")
                $("#sample_ratio_input_id").attr("Disabled", "Disabled")

                $("#batch_size_checkbox_id").attr("Disabled", "Disabled")
                $("#latent_dim_checkbox_id").attr("Disabled", "Disabled")
                $("#dropout_checkbox_id").attr("Disabled", "Disabled")
                $("#lr_checkbox_id").attr("Disabled", "Disabled")
                $("#anneal_cap_checkbox_id").attr("Disabled", "Disabled")
                $("#factors_checkbox_id").attr("Disabled", "Disabled")
                $("#num_ng_checkbox_id").attr("Disabled", "Disabled")
                $("#node_dropout_checkbox_id").attr("Disabled", "Disabled")
                $("#mess_dropout_checkbox_id").attr("Disabled", "Disabled")
                $("#reg1_checkbox_id").attr("Disabled", "Disabled")
                $("#reg2_checkbox_id").attr("Disabled", "Disabled")
                $("#num_layers_checkbox_id").attr("Disabled", "Disabled")
                $("#maxk_checkbox_id").attr("Disabled", "Disabled")
                $("#alpha_checkbox_id").attr("Disabled", "Disabled")
                $("#elastic_checkbox_id").attr("Disabled", "Disabled")
                $("#context_window_checkbox_id").attr("Disabled", "Disabled")
                $("#rho_checkbox_id").attr("Disabled", "Disabled")
                $("#reg_checkbox_id").attr("Disabled", "Disabled")

                $("#batch_size_min_input_id").attr("Disabled", "Disabled")
                $("#batch_size_max_input_id").attr("Disabled", "Disabled")
                $("#batch_size_step_input_id").attr("Disabled", "Disabled")
                $("#batch_size_value_input_id").attr("Disabled", "Disabled")
                $("#batch_size_choice_value_input_id").attr("Disabled", "Disabled")
                $("#latent_dim_min_input_id").attr("Disabled", "Disabled")
                $("#latent_dim_max_input_id").attr("Disabled", "Disabled")
                $("#latent_dim_step_input_id").attr("Disabled", "Disabled")
                $("#latent_dim_value_input_id").attr("Disabled", "Disabled")
                $("#latent_dim_choice_value_input_id").attr("Disabled", "Disabled")
                $("#dropout_min_input_id").attr("Disabled", "Disabled")
                $("#dropout_max_input_id").attr("Disabled", "Disabled")
                $("#dropout_step_input_id").attr("Disabled", "Disabled")
                $("#dropout_value_input_id").attr("Disabled", "Disabled")
                $("#dropout_choice_value_input_id").attr("Disabled", "Disabled")
                $("#lr_min_input_id").attr("Disabled", "Disabled")
                $("#lr_max_input_id").attr("Disabled", "Disabled")
                $("#lr_step_input_id").attr("Disabled", "Disabled")
                $("#lr_value_input_id").attr("Disabled", "Disabled")
                $("#lr_choice_value_input_id").attr("Disabled", "Disabled")
                $("#anneal_cap_min_input_id").attr("Disabled", "Disabled")
                $("#anneal_cap_max_input_id").attr("Disabled", "Disabled")
                $("#anneal_cap_step_input_id").attr("Disabled", "Disabled")
                $("#anneal_cap_value_input_id").attr("Disabled", "Disabled")
                $("#anneal_cap_choice_value_input_id").attr("Disabled", "Disabled")
                $("#factors_min_input_id").attr("Disabled", "Disabled")
                $("#factors_max_input_id").attr("Disabled", "Disabled")
                $("#factors_step_input_id").attr("Disabled", "Disabled")
                $("#factors_value_input_id").attr("Disabled", "Disabled")
                $("#factors_choice_value_input_id").attr("Disabled", "Disabled")
                $("#num_ng_min_input_id").attr("Disabled", "Disabled")
                $("#num_ng_max_input_id").attr("Disabled", "Disabled")
                $("#num_ng_step_input_id").attr("Disabled", "Disabled")
                $("#num_ng_value_input_id").attr("Disabled", "Disabled")
                $("#num_ng_choice_value_input_id").attr("Disabled", "Disabled")
                $("#node_dropout_min_input_id").attr("Disabled", "Disabled")
                $("#node_dropout_max_input_id").attr("Disabled", "Disabled")
                $("#node_dropout_step_input_id").attr("Disabled", "Disabled")
                $("#node_dropout_value_input_id").attr("Disabled", "Disabled")
                $("#node_dropout_choice_value_input_id").attr("Disabled", "Disabled")
                $("#mess_dropout_min_input_id").attr("Disabled", "Disabled")
                $("#mess_dropout_max_input_id").attr("Disabled", "Disabled")
                $("#mess_dropout_step_input_id").attr("Disabled", "Disabled")
                $("#mess_dropout_value_input_id").attr("Disabled", "Disabled")
                $("#mess_dropout_choice_value_input_id").attr("Disabled", "Disabled")
                $("#reg1_min_input_id").attr("Disabled", "Disabled")
                $("#reg1_max_input_id").attr("Disabled", "Disabled")
                $("#reg1_step_input_id").attr("Disabled", "Disabled")
                $("#reg1_value_input_id").attr("Disabled", "Disabled")
                $("#reg1_choice_value_input_id").attr("Disabled", "Disabled")
                $("#reg2_min_input_id").attr("Disabled", "Disabled")
                $("#reg2_max_input_id").attr("Disabled", "Disabled")
                $("#reg2_step_input_id").attr("Disabled", "Disabled")
                $("#reg2_value_input_id").attr("Disabled", "Disabled")
                $("#reg2_choice_value_input_id").attr("Disabled", "Disabled")
                $("#num_layers_min_input_id").attr("Disabled", "Disabled")
                $("#num_layers_max_input_id").attr("Disabled", "Disabled")
                $("#num_layers_step_input_id").attr("Disabled", "Disabled")
                $("#num_layers_value_input_id").attr("Disabled", "Disabled")
                $("#num_layers_choice_value_input_id").attr("Disabled", "Disabled")
                $("#maxk_min_input_id").attr("Disabled", "Disabled")
                $("#maxk_max_input_id").attr("Disabled", "Disabled")
                $("#maxk_step_input_id").attr("Disabled", "Disabled")
                $("#maxk_value_input_id").attr("Disabled", "Disabled")
                $("#maxk_choice_value_input_id").attr("Disabled", "Disabled")
                $("#alpha_min_input_id").attr("Disabled", "Disabled")
                $("#alpha_max_input_id").attr("Disabled", "Disabled")
                $("#alpha_step_input_id").attr("Disabled", "Disabled")
                $("#alpha_value_input_id").attr("Disabled", "Disabled")
                $("#alpha_choice_value_input_id").attr("Disabled", "Disabled")
                $("#elastic_min_input_id").attr("Disabled", "Disabled")
                $("#elastic_max_input_id").attr("Disabled", "Disabled")
                $("#elastic_step_input_id").attr("Disabled", "Disabled")
                $("#elastic_value_input_id").attr("Disabled", "Disabled")
                $("#elastic_choice_value_input_id").attr("Disabled", "Disabled")
                $("#context_window_min_input_id").attr("Disabled", "Disabled")
                $("#context_window_max_input_id").attr("Disabled", "Disabled")
                $("#context_window_step_input_id").attr("Disabled", "Disabled")
                $("#context_window_value_input_id").attr("Disabled", "Disabled")
                $("#context_window_choice_value_input_id").attr("Disabled", "Disabled")
                $("#rho_min_input_id").attr("Disabled", "Disabled")
                $("#rho_max_input_id").attr("Disabled", "Disabled")
                $("#rho_step_input_id").attr("Disabled", "Disabled")
                $("#rho_value_input_id").attr("Disabled", "Disabled")
                $("#rho_choice_value_input_id").attr("Disabled", "Disabled")
                $("#reg_min_input_id").attr("Disabled", "Disabled")
                $("#reg_max_input_id").attr("Disabled", "Disabled")
                $("#reg_step_input_id").attr("Disabled", "Disabled")
                $("#reg_value_input_id").attr("Disabled", "Disabled")
                $("#reg_choice_value_input_id").attr("Disabled", "Disabled")

                $("#copy_icon_link_id").show()
                $("#copy_complete_icon_link_id").hide()

                if (is_test_flag) {
                    // Generate fair_rec python command
                    var fair_rec_string = "python test.py "
                    fair_rec_string = fair_rec_string + "--algo_name=" + $("#algo_name_selector_id").val().toString()
                    fair_rec_string = fair_rec_string + " --dataset=" + $("#dataset_selector_id").val().toString()
                    if ($("#preprocess_selector_id").val().toString() == "origin") {
                        fair_rec_string = fair_rec_string + " --prepro=" + $("#preprocess_selector_id").val().toString()
                    } else {
                        fair_rec_string = fair_rec_string + " --prepro=" + $("#preprocess_number_input_id").val().toString() + $("#preprocess_selector_id").val().toString()
                    }
                    fair_rec_string = fair_rec_string + " --topk=" + $("#topk_input_id").val().toString()
                    if ($("#epoch_input_id").val().toString() != "") {
                        fair_rec_string = fair_rec_string + " --epoch=" + $("#epoch_input_id").val().toString()
                    }
                    if ($("#test_size_input_id").val().toString() != "") {
                        fair_rec_string = fair_rec_string + " --test_size=" + $("#test_size_input_id").val().toString()
                    }
                    if ($("#val_size_input_id").val().toString() != "") {
                        fair_rec_string = fair_rec_string + " --val_size=" + $("#val_size_input_id").val().toString()
                    }
                    fair_rec_string = fair_rec_string + " --cand_num=" + $("#cand_num_input_id").val().toString()
                    if ($("#gpu_input_id").val().toString() != "") {
                        fair_rec_string = fair_rec_string + " --gpu=" + $("#gpu_input_id").val().toString()
                    }
                    if ($("#init_method_selector_id").val() != null) {
                        fair_rec_string = fair_rec_string + " --init_method=" + $("#init_method_selector_id").val().toString()
                    }
                    if ($("#optimizer_selector_id").val() != null) {
                        fair_rec_string = fair_rec_string + " --optimizer=" + $("#optimizer_selector_id").val().toString()
                    }
                    if ($("#early_stop_selector_id").val() != null) {
                        if ($("#early_stop_selector_id").val() == "True") {
                            fair_rec_string = fair_rec_string
                        } else if ($("#early_stop_selector_id").val() == "False") {
                            fair_rec_string = fair_rec_string + " --early_stop"
                        }
                    }
                    if ($("#loss_type_selector_id").val() != null) {
                        fair_rec_string = fair_rec_string + " --loss_type=" + $("#loss_type_selector_id").val().toString()
                    }
                    fair_rec_string = fair_rec_string + " --test_method=" + $("#test_method_selector_id").val().toString()
                    fair_rec_string = fair_rec_string + " --val_method=" + $("#val_method_selector_id").val().toString()
                    if ($("#sample_method_selector_id").val() != null) {
                        fair_rec_string = fair_rec_string + " --sample_method=" + $("#sample_method_selector_id").val().toString()
                    }
                    if ($("#sample_ratio_input_id").val().toString() != "") {
                        fair_rec_string = fair_rec_string + " --sample_ratio=" + $("#sample_ratio_input_id").val().toString()
                    }

                    if($("#batch_size_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --batch_size=" + $("#batch_size_value_input_id").val().toString()
                    }
                    if($("#latent_dim_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --latent_dim=" + $("#latent_dim_value_input_id").val().toString()
                    }
                    if($("#dropout_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --dropout=" + $("#dropout_value_input_id").val().toString()
                    }
                    if($("#lr_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --lr=" + $("#lr_value_input_id").val().toString()
                    }
                    if($("#anneal_cap_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --anneal_cap=" + $("#anneal_cap_value_input_id").val().toString()
                    }
                    if($("#factors_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --factors=" + $("#factors_value_input_id").val().toString()
                    }
                    if($("#num_ng_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --num_ng=" + $("#num_ng_value_input_id").val().toString()
                    }
                    if($("#node_dropout_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --node_dropout=" + $("#node_dropout_value_input_id").val().toString()
                    }
                    if($("#mess_dropout_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --mess_dropout=" + $("#mess_dropout_value_input_id").val().toString()
                    }
                    if($("#reg1_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --reg_1=" + $("#reg1_value_input_id").val().toString()
                    }
                    if($("#reg2_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --reg_2=" + $("#reg2_value_input_id").val().toString()
                    }
                    if($("#num_layers_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --num_layers=" + $("#num_layers_value_input_id").val().toString()
                    }
                    if($("#maxk_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --maxk=" + $("#maxk_value_input_id").val().toString()
                    }
                    if($("#alpha_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --alpha=" + $("#alpha_value_input_id").val().toString()
                    }
                    if($("#elastic_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --elastic=" + $("#elastic_value_input_id").val().toString()
                    }
                    if($("#context_window_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --context_window=" + $("#context_window_value_input_id").val().toString()
                    }
                    if($("#rho_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --rho=" + $("#rho_value_input_id").val().toString()
                    }
                    if($("#reg_group_id").is(":visible")) {
                        fair_rec_string = fair_rec_string + " --reg=" + $("#reg_value_input_id").val().toString()
                    }

                    $("#textarea_id").val(fair_rec_string)
                } else {
                    // Generate fair_hpo python command
                    var fair_hpo_string = "python tune.py "
                    fair_hpo_string = fair_hpo_string + "--optimization_metric=" + $("#optimization_metric_selector_id").val().toString()
                    fair_hpo_string = fair_hpo_string + " --hyperopt_trail=" + $("#hyperopt_trail_input_id").val().toString()
                    fair_hpo_string = fair_hpo_string + " --algo_name=" + $("#algo_name_selector_id").val().toString()
                    fair_hpo_string = fair_hpo_string + " --dataset=" + $("#dataset_selector_id").val().toString()
                    if ($("#preprocess_selector_id").val().toString() == "origin") {
                        fair_hpo_string = fair_hpo_string + " --prepro=" + $("#preprocess_selector_id").val().toString()
                    } else {
                        fair_hpo_string = fair_hpo_string + " --prepro=" + $("#preprocess_number_input_id").val().toString() + $("#preprocess_selector_id").val().toString()
                    }
                    fair_hpo_string = fair_hpo_string + " --topk=" + $("#topk_input_id").val().toString()
                    if ($("#fold_num_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --fold_num=" + $("#fold_num_input_id").val().toString()
                    }
                    if ($("#epoch_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --epoch=" + $("#epoch_input_id").val().toString()
                    }
                    if ($("#test_size_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --test_size=" + $("#test_size_input_id").val().toString()
                    }
                    if ($("#val_size_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --val_size=" + $("#val_size_input_id").val().toString()
                    }
                    fair_hpo_string = fair_hpo_string + " --cand_num=" + $("#cand_num_input_id").val().toString()
                    if ($("#gpu_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --gpu=" + $("#gpu_input_id").val().toString()
                    }
                    if ($("#init_method_selector_id").val() != null) {
                        fair_hpo_string = fair_hpo_string + " --init_method=" + $("#init_method_selector_id").val().toString()
                    }
                    if ($("#optimizer_selector_id").val() != null) {
                        fair_hpo_string = fair_hpo_string + " --optimizer=" + $("#optimizer_selector_id").val().toString()
                    }
                    if ($("#early_stop_selector_id").val() != null) {
                        if ($("#early_stop_selector_id").val() == "True") {
                            fair_hpo_string = fair_hpo_string
                        } else if ($("#early_stop_selector_id").val() == "False") {
                            fair_hpo_string = fair_hpo_string + " --early_stop"
                        }
                    }
                    if ($("#loss_type_selector_id").val() != null) {
                        fair_hpo_string = fair_hpo_string + " --loss_type=" + $("#loss_type_selector_id").val().toString()
                    }
                    fair_hpo_string = fair_hpo_string + " --test_method=" + $("#test_method_selector_id").val().toString()
                    fair_hpo_string = fair_hpo_string + " --val_method=" + $("#val_method_selector_id").val().toString()
                    if ($("#sample_method_selector_id").val() != null) {
                        fair_hpo_string = fair_hpo_string + " --sample_method=" + $("#sample_method_selector_id").val().toString()
                    }
                    if ($("#sample_ratio_input_id").val().toString() != "") {
                        fair_hpo_string = fair_hpo_string + " --sample_ratio=" + $("#sample_ratio_input_id").val().toString()
                    }

                    var batch_size_string = ""
                    if($("#batch_size_group_id").is(":visible") || $("#batch_size_choice_group_id").is(":visible")) {
                        if (is_batch_size_choice_flag) {
                            batch_size_string = batch_size_string + '"batch_size": [' + $("#batch_size_choice_value_input_id").val().toString() + "]"
                        } else {
                            batch_size_string = batch_size_string + '"batch_size": {"min": ' + $("#batch_size_min_input_id").val().toString() 
                                + ', "max": ' + $("#batch_size_max_input_id").val().toString() + ', "step": '
                            if ($("#batch_size_step_input_id").val().toString() == "") {
                                batch_size_string = batch_size_string + "null}"
                            } else {
                                batch_size_string = batch_size_string + $("#batch_size_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var latent_dim_string = ""
                    if($("#latent_dim_group_id").is(":visible") || $("#latent_dim_choice_group_id").is(":visible")) {
                        if (is_latent_dim_choice_flag) {
                            latent_dim_string = latent_dim_string + '"latent_dim": [' + $("#latent_dim_choice_value_input_id").val().toString() + "]"
                        } else {
                            latent_dim_string = latent_dim_string + '"latent_dim": {"min": ' + $("#latent_dim_min_input_id").val().toString() 
                                + ', "max": ' + $("#latent_dim_max_input_id").val().toString() + ', "step": '
                            if ($("#latent_dim_step_input_id").val().toString() == "") {
                                latent_dim_string = latent_dim_string + "null}"
                            } else {
                                latent_dim_string = latent_dim_string + $("#latent_dim_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var dropout_string = ""
                    if($("#dropout_group_id").is(":visible") || $("#dropout_choice_group_id").is(":visible")) {
                        if (is_dropout_choice_flag) {
                            dropout_string = dropout_string + '"dropout": [' + $("#dropout_choice_value_input_id").val().toString() + "]"
                        } else {
                            dropout_string = dropout_string + '"dropout": {"min": ' + $("#dropout_min_input_id").val().toString() 
                                + ', "max": ' + $("#dropout_max_input_id").val().toString() + ', "step": '
                            if ($("#dropout_step_input_id").val().toString() == "") {
                                dropout_string = dropout_string + "null}"
                            } else {
                                dropout_string = dropout_string + $("#dropout_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var lr_string = ""
                    if($("#lr_group_id").is(":visible") || $("#lr_choice_group_id").is(":visible")) {
                        if (is_lr_choice_flag) {
                            lr_string = lr_string + '"lr": [' + $("#lr_choice_value_input_id").val().toString() + "]"
                        } else {
                            lr_string = lr_string + '"lr": {"min": ' + $("#lr_min_input_id").val().toString() 
                                + ', "max": ' + $("#lr_max_input_id").val().toString() + ', "step": '
                            if ($("#lr_step_input_id").val().toString() == "") {
                                lr_string = lr_string + "null}"
                            } else {
                                lr_string = lr_string + $("#lr_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var anneal_cap_string = ""
                    if($("#anneal_cap_group_id").is(":visible") || $("#anneal_cap_choice_group_id").is(":visible")) {
                        if (is_anneal_cap_choice_flag) {
                            anneal_cap_string = anneal_cap_string + '"anneal_cap": [' + $("#anneal_cap_choice_value_input_id").val().toString() + "]"
                        } else {
                            anneal_cap_string = anneal_cap_string + '"anneal_cap": {"min": ' + $("#anneal_cap_min_input_id").val().toString() 
                                + ', "max": ' + $("#anneal_cap_max_input_id").val().toString() + ', "step": '
                            if ($("#anneal_cap_step_input_id").val().toString() == "") {
                                anneal_cap_string = anneal_cap_string + "null}"
                            } else {
                                anneal_cap_string = anneal_cap_string + $("#anneal_cap_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var factors_string = ""
                    if($("#factors_group_id").is(":visible") || $("#factors_choice_group_id").is(":visible")) {
                        if (is_factors_choice_flag) {
                            factors_string = factors_string + '"factors": [' + $("#factors_choice_value_input_id").val().toString() + "]"
                        } else {
                            factors_string = factors_string + '"factors": {"min": ' + $("#factors_min_input_id").val().toString() 
                                + ', "max": ' + $("#factors_max_input_id").val().toString() + ', "step": '
                            if ($("#factors_step_input_id").val().toString() == "") {
                                factors_string = factors_string + "null}"
                            } else {
                                factors_string = factors_string + $("#factors_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var num_ng_string = ""
                    if($("#num_ng_group_id").is(":visible") || $("#num_ng_choice_group_id").is(":visible")) {
                        if (is_num_ng_choice_flag) {
                            num_ng_string = num_ng_string + '"num_ng": [' + $("#num_ng_choice_value_input_id").val().toString() + "]"
                        } else {
                            num_ng_string = num_ng_string + '"num_ng": {"min": ' + $("#num_ng_min_input_id").val().toString() 
                                + ', "max": ' + $("#num_ng_max_input_id").val().toString() + ', "step": '
                            if ($("#num_ng_step_input_id").val().toString() == "") {
                                num_ng_string = num_ng_string + "null}"
                            } else {
                                num_ng_string = num_ng_string + $("#num_ng_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var node_dropout_string = ""
                    if($("#node_dropout_group_id").is(":visible") || $("#node_dropout_choice_group_id").is(":visible")) {
                        if (is_node_dropout_choice_flag) {
                            node_dropout_string = node_dropout_string + '"node_dropout": [' + $("#node_dropout_choice_value_input_id").val().toString() + "]"
                        } else {
                            node_dropout_string = node_dropout_string + '"node_dropout": {"min": ' + $("#node_dropout_min_input_id").val().toString() 
                                + ', "max": ' + $("#node_dropout_max_input_id").val().toString() + ', "step": '
                            if ($("#node_dropout_step_input_id").val().toString() == "") {
                                node_dropout_string = node_dropout_string + "null}"
                            } else {
                                node_dropout_string = node_dropout_string + $("#node_dropout_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var mess_dropout_string = ""
                    if($("#mess_dropout_group_id").is(":visible") || $("#mess_dropout_choice_group_id").is(":visible")) {
                        if (is_mess_dropout_choice_flag) {
                            mess_dropout_string = mess_dropout_string + '"mess_dropout": [' + $("#mess_dropout_choice_value_input_id").val().toString() + "]"
                        } else {
                            mess_dropout_string = mess_dropout_string + '"mess_dropout": {"min": ' + $("#mess_dropout_min_input_id").val().toString() 
                                + ', "max": ' + $("#mess_dropout_max_input_id").val().toString() + ', "step": '
                            if ($("#mess_dropout_step_input_id").val().toString() == "") {
                                mess_dropout_string = mess_dropout_string + "null}"
                            } else {
                                mess_dropout_string = mess_dropout_string + $("#mess_dropout_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var reg1_string = ""
                    if($("#reg1_group_id").is(":visible") || $("#reg1_choice_group_id").is(":visible")) {
                        if (is_reg1_choice_flag) {
                            reg1_string = reg1_string + '"reg_1": [' + $("#reg1_choice_value_input_id").val().toString() + "]"
                        } else {
                            reg1_string = reg1_string + '"reg_1": {"min": ' + $("#reg1_min_input_id").val().toString() 
                                + ', "max": ' + $("#reg1_max_input_id").val().toString() + ', "step": '
                            if ($("#reg1_step_input_id").val().toString() == "") {
                                reg1_string = reg1_string + "null}"
                            } else {
                                reg1_string = reg1_string + $("#reg1_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var reg2_string = ""
                    if($("#reg2_group_id").is(":visible") || $("#reg2_choice_group_id").is(":visible")) {
                        if (is_reg2_choice_flag) {
                            reg2_string = reg2_string + '"reg_2": [' + $("#reg2_choice_value_input_id").val().toString() + "]"
                        } else {
                            reg2_string = reg2_string + '"reg_2": {"min": ' + $("#reg2_min_input_id").val().toString() 
                                + ', "max": ' + $("#reg2_max_input_id").val().toString() + ', "step": '
                            if ($("#reg2_step_input_id").val().toString() == "") {
                                reg2_string = reg2_string + "null}"
                            } else {
                                reg2_string = reg2_string + $("#reg2_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var num_layers_string = ""
                    if($("#num_layers_group_id").is(":visible") || $("#num_layers_choice_group_id").is(":visible")) {
                        if (is_num_layers_choice_flag) {
                            num_layers_string = num_layers_string + '"num_layers": [' + $("#num_layers_choice_value_input_id").val().toString() + "]"
                        } else {
                            num_layers_string = num_layers_string + '"num_layers": {"min": ' + $("#num_layers_min_input_id").val().toString() 
                                + ', "max": ' + $("#num_layers_max_input_id").val().toString() + ', "step": '
                            if ($("#num_layers_step_input_id").val().toString() == "") {
                                num_layers_string = num_layers_string + "null}"
                            } else {
                                num_layers_string = num_layers_string + $("#num_layers_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var maxk_string = ""
                    if($("#maxk_group_id").is(":visible") || $("#maxk_choice_group_id").is(":visible")) {
                        if (is_maxk_choice_flag) {
                            maxk_string = maxk_string + '"maxk": [' + $("#maxk_choice_value_input_id").val().toString() + "]"
                        } else {
                            maxk_string = maxk_string + '"maxk": {"min": ' + $("#maxk_min_input_id").val().toString() 
                                + ', "max": ' + $("#maxk_max_input_id").val().toString() + ', "step": '
                            if ($("#maxk_step_input_id").val().toString() == "") {
                                maxk_string = maxk_string + "null}"
                            } else {
                                maxk_string = maxk_string + $("#maxk_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var alpha_string = ""
                    if($("#alpha_group_id").is(":visible") || $("#alpha_choice_group_id").is(":visible")) {
                        if (is_alpha_choice_flag) {
                            alpha_string = alpha_string + '"alpha": [' + $("#alpha_choice_value_input_id").val().toString() + "]"
                        } else {
                            alpha_string = alpha_string + '"alpha": {"min": ' + $("#alpha_min_input_id").val().toString() 
                                + ', "max": ' + $("#alpha_max_input_id").val().toString() + ', "step": '
                            if ($("#alpha_step_input_id").val().toString() == "") {
                                alpha_string = alpha_string + "null}"
                            } else {
                                alpha_string = alpha_string + $("#alpha_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var elastic_string = ""
                    if($("#elastic_group_id").is(":visible") || $("#elastic_choice_group_id").is(":visible")) {
                        if (is_elastic_choice_flag) {
                            elastic_string = elastic_string + '"elastic": [' + $("#elastic_choice_value_input_id").val().toString() + "]"
                        } else {
                            elastic_string = elastic_string + '"elastic": {"min": ' + $("#elastic_min_input_id").val().toString() 
                                + ', "max": ' + $("#elastic_max_input_id").val().toString() + ', "step": '
                            if ($("#elastic_step_input_id").val().toString() == "") {
                                elastic_string = elastic_string + "null}"
                            } else {
                                elastic_string = elastic_string + $("#elastic_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var context_window_string = ""
                    if($("#context_window_group_id").is(":visible") || $("#context_window_choice_group_id").is(":visible")) {
                        if (is_context_window_choice_flag) {
                            context_window_string = context_window_string + '"context_window": [' + $("#context_window_choice_value_input_id").val().toString() + "]"
                        } else {
                            context_window_string = context_window_string + '"context_window": {"min": ' + $("#context_window_min_input_id").val().toString() 
                                + ', "max": ' + $("#context_window_max_input_id").val().toString() + ', "step": '
                            if ($("#context_window_step_input_id").val().toString() == "") {
                                context_window_string = context_window_string + "null}"
                            } else {
                                context_window_string = context_window_string + $("#context_window_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var rho_string = ""
                    if($("#rho_group_id").is(":visible") || $("#rho_choice_group_id").is(":visible")) {
                        if (is_rho_choice_flag) {
                            rho_string = rho_string + '"rho": [' + $("#rho_choice_value_input_id").val().toString() + "]"
                        } else {
                            rho_string = rho_string + '"rho": {"min": ' + $("#rho_min_input_id").val().toString() 
                                + ', "max": ' + $("#rho_max_input_id").val().toString() + ', "step": '
                            if ($("#rho_step_input_id").val().toString() == "") {
                                rho_string = rho_string + "null}"
                            } else {
                                rho_string = rho_string + $("#rho_step_input_id").val().toString() + "}"
                            }
                        }
                    }
                    var reg_string = ""
                    if($("#reg_group_id").is(":visible") || $("#reg_choice_group_id").is(":visible")) {
                        if (is_reg_choice_flag) {
                            reg_string = reg_string + '"reg": [' + $("#reg_choice_value_input_id").val().toString() + "]"
                        } else {
                            reg_string = reg_string + '"reg": {"min": ' + $("#reg_min_input_id").val().toString() 
                                + ', "max": ' + $("#reg_max_input_id").val().toString() + ', "step": '
                            if ($("#reg_step_input_id").val().toString() == "") {
                                reg_string = reg_string + "null}"
                            } else {
                                reg_string = reg_string + $("#reg_step_input_id").val().toString() + "}"
                            }
                        }
                    }

                    tune_pack_string = "--tune_pack='{"
                    var is_first_flag = true
                    if ($("#batch_size_checkbox_id")[0].checked) {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + batch_size_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + batch_size_string
                        }
                    }
                    if ($("#latent_dim_checkbox_id")[0].checked) {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + latent_dim_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + latent_dim_string
                        }
                    }
                    if (dropout_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + dropout_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + dropout_string
                        }
                    }
                    if (lr_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + lr_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + lr_string
                        }
                    }
                    if (anneal_cap_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + anneal_cap_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + anneal_cap_string
                        }
                    }
                    if (factors_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + factors_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + factors_string
                        }
                    }
                    if (num_ng_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + num_ng_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + num_ng_string
                        }
                    }
                    if (node_dropout_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + node_dropout_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + node_dropout_string
                        }
                    }
                    if (mess_dropout_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + mess_dropout_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + mess_dropout_string
                        }
                    }
                    if (reg1_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + reg1_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + reg1_string
                        }
                    }
                    if (reg2_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + reg2_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + reg2_string
                        }
                    }
                    if (num_layers_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + num_layers_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + num_layers_string
                        }
                    }
                    if (maxk_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + maxk_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + maxk_string
                        }
                    }
                    if (alpha_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + alpha_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + alpha_string
                        }
                    }
                    if (elastic_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + elastic_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + elastic_string
                        }
                    }
                    if (context_window_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + context_window_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + context_window_string
                        }
                    }
                    if (rho_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + rho_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + rho_string
                        }
                    }
                    if (reg_string != "") {
                        if (is_first_flag) {
                            tune_pack_string = tune_pack_string + reg_string
                            is_first_flag = false
                        } else {
                            tune_pack_string = tune_pack_string + ", " + reg_string
                        }
                    }

                    fair_hpo_string = fair_hpo_string + " " + tune_pack_string + "}'"

                    $("#textarea_id").val(fair_hpo_string)
                }
            } else {
                sweetAlert("Error", "Notice: Exceptions to input parameters!!!", "error")
            }
        } else if ($("#submit-btn1_id").html() == "Reset") {
            $("html, body").animate({ scrollTop: $("#algo-specific-setting_id").offset().top }, 10)
            $("#submit-btn1_id").show()
            $("#submit-btn2_id").html("Submit")
            $("#submit-btn2_id").removeClass("btn btn-outline-success").addClass("btn btn-outline-primary")
            
            // Keep the first part unwritable
            $("#optimization_metric_selector_id").attr("Disabled", "Disabled")
            $("#algo_name_selector_id").attr("Disabled", "Disabled")
            $("#dataset_selector_id").attr("Disabled", "Disabled")
            $("#preprocess_selector_id").attr("Disabled", "Disabled")
            $("#test_method_selector_id").attr("Disabled", "Disabled")
            $("#val_method_selector_id").attr("Disabled", "Disabled")
            $("#sample_method_selector_id").attr("Disabled", "Disabled")
            $("#init_method_selector_id").attr("Disabled", "Disabled")
            $("#optimizer_selector_id").attr("Disabled", "Disabled")
            $("#early_stop_selector_id").attr("Disabled", "Disabled")
            $("#loss_type_selector_id").attr("Disabled", "Disabled")

            $("#hyperopt_trail_input_id").attr("Disabled", "Disabled")
                $("#hyperopt_trail_warning_id").hide()
            $("#preprocess_number_input_id").attr("Disabled", "Disabled")
                $("#preprocess_number_warning_id").hide()
            $("#test_size_input_id").attr("Disabled", "Disabled")
                $("#test_size_warning_id").hide()
            $("#val_size_input_id").attr("Disabled", "Disabled")
                $("#val_size_warning_id").hide()
            $("#topk_input_id").attr("Disabled", "Disabled")
                $("#topk_warning_id").hide()
            $("#fold_num_input_id").attr("Disabled", "Disabled")
                $("#fold_num_warning_id").hide()
            $("#epoch_input_id").attr("Disabled", "Disabled")
                $("#epoch_warning_id").hide()
            $("#cand_num_input_id").attr("Disabled", "Disabled")
                $("#cand_num_warning_id").hide()
            $("#sample_ratio_input_id").attr("Disabled", "Disabled")
                $("#sample_ratio_warning_id").hide()
            $("#gpu_input_id").attr("Disabled", "Disabled")

            $("#batch_size_checkbox_id").attr("Disabled", false)
            $("#latent_dim_checkbox_id").attr("Disabled", false)
            $("#dropout_checkbox_id").attr("Disabled", false)
            $("#lr_checkbox_id").attr("Disabled", false)
            $("#anneal_cap_checkbox_id").attr("Disabled", false)
            $("#factors_checkbox_id").attr("Disabled", false)
            $("#num_ng_checkbox_id").attr("Disabled", false)
            $("#node_dropout_checkbox_id").attr("Disabled", false)
            $("#mess_dropout_checkbox_id").attr("Disabled", false)
            $("#reg1_checkbox_id").attr("Disabled", false)
            $("#reg2_checkbox_id").attr("Disabled", false)
            $("#num_layers_checkbox_id").attr("Disabled", false)
            $("#maxk_checkbox_id").attr("Disabled", false)
            $("#alpha_checkbox_id").attr("Disabled", false)
            $("#elastic_checkbox_id").attr("Disabled", false)
            $("#context_window_checkbox_id").attr("Disabled", false)
            $("#rho_checkbox_id").attr("Disabled", false)
            $("#reg_checkbox_id").attr("Disabled", false)

            $("#batch_size_min_input_id").attr("Disabled", false)
            $("#batch_size_max_input_id").attr("Disabled", false)
            $("#batch_size_step_input_id").attr("Disabled", false)
            $("#batch_size_value_input_id").attr("Disabled", false)
            $("#batch_size_choice_value_input_id").attr("Disabled", false)
            $("#latent_dim_min_input_id").attr("Disabled", false)
            $("#latent_dim_max_input_id").attr("Disabled", false)
            $("#latent_dim_step_input_id").attr("Disabled", false)
            $("#latent_dim_value_input_id").attr("Disabled", false)
            $("#latent_dim_choice_value_input_id").attr("Disabled", false)
            $("#dropout_min_input_id").attr("Disabled", false)
            $("#dropout_max_input_id").attr("Disabled", false)
            $("#dropout_step_input_id").attr("Disabled", false)
            $("#dropout_value_input_id").attr("Disabled", false)
            $("#dropout_choice_value_input_id").attr("Disabled", false)
            $("#lr_min_input_id").attr("Disabled", false)
            $("#lr_max_input_id").attr("Disabled", false)
            $("#lr_step_input_id").attr("Disabled", false)
            $("#lr_value_input_id").attr("Disabled", false)
            $("#lr_choice_value_input_id").attr("Disabled", false)
            $("#anneal_cap_min_input_id").attr("Disabled", false)
            $("#anneal_cap_max_input_id").attr("Disabled", false)
            $("#anneal_cap_step_input_id").attr("Disabled", false)
            $("#anneal_cap_value_input_id").attr("Disabled", false)
            $("#anneal_cap_choice_value_input_id").attr("Disabled", false)
            $("#factors_min_input_id").attr("Disabled", false)
            $("#factors_max_input_id").attr("Disabled", false)
            $("#factors_step_input_id").attr("Disabled", false)
            $("#factors_value_input_id").attr("Disabled", false)
            $("#factors_choice_value_input_id").attr("Disabled", false)
            $("#num_ng_min_input_id").attr("Disabled", false)
            $("#num_ng_max_input_id").attr("Disabled", false)
            $("#num_ng_step_input_id").attr("Disabled", false)
            $("#num_ng_value_input_id").attr("Disabled", false)
            $("#num_ng_choice_value_input_id").attr("Disabled", false)
            $("#node_dropout_min_input_id").attr("Disabled", false)
            $("#node_dropout_max_input_id").attr("Disabled", false)
            $("#node_dropout_step_input_id").attr("Disabled", false)
            $("#node_dropout_value_input_id").attr("Disabled", false)
            $("#node_dropout_choice_value_input_id").attr("Disabled", false)
            $("#mess_dropout_min_input_id").attr("Disabled", false)
            $("#mess_dropout_max_input_id").attr("Disabled", false)
            $("#mess_dropout_step_input_id").attr("Disabled", false)
            $("#mess_dropout_value_input_id").attr("Disabled", false)
            $("#mess_dropout_choice_value_input_id").attr("Disabled", false)
            $("#reg1_min_input_id").attr("Disabled", false)
            $("#reg1_max_input_id").attr("Disabled", false)
            $("#reg1_step_input_id").attr("Disabled", false)
            $("#reg1_value_input_id").attr("Disabled", false)
            $("#reg1_choice_value_input_id").attr("Disabled", false)
            $("#reg2_min_input_id").attr("Disabled", false)
            $("#reg2_max_input_id").attr("Disabled", false)
            $("#reg2_step_input_id").attr("Disabled", false)
            $("#reg2_value_input_id").attr("Disabled", false)
            $("#reg2_choice_value_input_id").attr("Disabled", false)
            $("#num_layers_min_input_id").attr("Disabled", false)
            $("#num_layers_max_input_id").attr("Disabled", false)
            $("#num_layers_step_input_id").attr("Disabled", false)
            $("#num_layers_value_input_id").attr("Disabled", false)
            $("#num_layers_choice_value_input_id").attr("Disabled", false)
            $("#maxk_min_input_id").attr("Disabled", false)
            $("#maxk_max_input_id").attr("Disabled", false)
            $("#maxk_step_input_id").attr("Disabled", false)
            $("#maxk_value_input_id").attr("Disabled", false)
            $("#maxk_choice_value_input_id").attr("Disabled", false)
            $("#alpha_min_input_id").attr("Disabled", false)
            $("#alpha_max_input_id").attr("Disabled", false)
            $("#alpha_step_input_id").attr("Disabled", false)
            $("#alpha_value_input_id").attr("Disabled", false)
            $("#alpha_choice_value_input_id").attr("Disabled", false)
            $("#elastic_min_input_id").attr("Disabled", false)
            $("#elastic_max_input_id").attr("Disabled", false)
            $("#elastic_step_input_id").attr("Disabled", false)
            $("#elastic_value_input_id").attr("Disabled", false)
            $("#elastic_choice_value_input_id").attr("Disabled", false)
            $("#context_window_min_input_id").attr("Disabled", false)
            $("#context_window_max_input_id").attr("Disabled", false)
            $("#context_window_step_input_id").attr("Disabled", false)
            $("#context_window_value_input_id").attr("Disabled", false)
            $("#context_window_choice_value_input_id").attr("Disabled", false)
            $("#rho_min_input_id").attr("Disabled", false)
            $("#rho_max_input_id").attr("Disabled", false)
            $("#rho_step_input_id").attr("Disabled", false)
            $("#rho_value_input_id").attr("Disabled", false)
            $("#rho_choice_value_input_id").attr("Disabled", false)
            $("#reg_min_input_id").attr("Disabled", false)
            $("#reg_max_input_id").attr("Disabled", false)
            $("#reg_step_input_id").attr("Disabled", false)
            $("#reg_value_input_id").attr("Disabled", false)
            $("#reg_choice_value_input_id").attr("Disabled", false)

            $("#copy_icon_link_id").hide()
            $("#copy_complete_icon_link_id").hide()

            $("#textarea_id").val("")

            setTimeout(function () {
                $("#page-title3_id").hide()
                $("#third_card_id").hide()
            }, 10);
        }
    });

    // The function used to copy the python command to clipboard
    function copyToClipboard(text_content) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text_content).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $("#copy_icon_link_id").click(function () {
        $("#copy_icon_link_id").hide()
        $("#copy_complete_icon_link_id").show()

        var python_command = $("#textarea_id").val()
        copyToClipboard(python_command)
        $("#copy_success_alert_id").show()
        $("#copy_success_alert_id").delay(3000).fadeOut(500);
    })

    $("#copy_complete_icon_link_id").click(function () {
        $("#copy_icon_link_id").hide()
        $("#copy_complete_icon_link_id").show()

        var python_command = $("#textarea_id").val()
        copyToClipboard(python_command)
        $("#copy_success_alert_id").show()
        $("#copy_success_alert_id").delay(3000).fadeOut(500);
    })
})