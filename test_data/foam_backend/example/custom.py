def get_next_index(prefix, names):
    indices = [int(n[len(prefix) + 1:]) for n in names]
    if not indices:
        return 1
    return max(indices) + 1

def preprocess_experiment(exp, Experiment):
    if exp.id:
        old_exp = Experiment.objects.get(id=exp.id)
        exp.name = old_exp.name
    else:
        next_index = get_next_index(
            exp.assay.name,
            [e.name for e in Experiment.objects.filter(name__startswith=exp.assay.name)]
        )
        exp.name = f'{exp.assay.name}-{next_index}'
